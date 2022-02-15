/********************************************
Carregando módulos 
*********************************************/

const Connection = require('../database/Connection')

var ControllerContatos = {
    criaContato
}

async function criaContato(nome, email, mensagem){
    try {

        if(!nome){
            throw new Error("É necessário informar o título da transação")
        }else if(nome.length <= 3){
            throw new Error("O nome deve ter ao menos 4 letras")
        }

        if(!email){
            throw new Error("É necessário informar o email")
        }

        if(!mensagem){
            throw new Error("É necessário informar a mensagem")
        }

        let verifica
        await Connection.Contatos.create({
            nome,
            email,
            mensagem,
        })
        .then(function(response){
            verifica = response
        })

        if(verifica){
            return 'Mensagem enviada com sucesso!'
        }else{
            throw new Error("Não foi possivel enviar a mensagem")
        }
        
    } catch (error) {
        return error.message
    }
}


module.exports = ControllerContatos;