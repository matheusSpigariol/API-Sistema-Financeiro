/********************************************
Carregando módulos 
*********************************************/

const Connection = require('../database/Connection')
const ControllerTransacao = require('../controller/ControllerTransacao')

var ControllerValores = {
    getValores
}

async function getValores(){
    try {
        let valorEntrada = 0
        let valorSaida = 0
        let valorTotal = 0
    
        await ControllerTransacao.listaTodasTransacoes()
        .then(function(response){
            response.forEach(transacao => {
                if(transacao.tipo == 'entrada'){
                    valorEntrada += parseFloat(transacao.valor)
                }else{
                    valorSaida -= parseFloat(transacao.valor)
                }
            });
        })

        valorTotal = parseFloat(valorEntrada+valorSaida)

        let valores = {
            entrada: valorEntrada,
            saida: valorSaida,
            total: valorTotal
        }

        return valores
    } catch (error) {
        return error.message
    }
    
}


module.exports = ControllerValores;