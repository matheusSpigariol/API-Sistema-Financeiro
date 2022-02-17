/********************************************
Carregando módulos 
*********************************************/

const Connection = require('../database/Connection')

var ControllerTransacao = {
    cadastraTransacao,
    listaTodasTransacoes,
    listaTransacao,
    deletarTransacao,
    editarTransacao
}

async function cadastraTransacao (titulo, valor, tipo, categoria){
    try {

        if(!titulo){
            throw new Error("É necessário informar o título da transação")
        }

        if(!valor){
            throw new Error("É necessário informar o valor da transação")
        }else if(parseFloat(valor) <= 0){
            throw new Error("Não é possivel informar um valor de transação menor ou igual a zero")
        }

        if(!tipo){
            throw new Error("É necessário informar o tipo da transação")
        }

        if(!categoria){
            throw new Error("É necessário informar a categoria da transação")
        }

        let verifica
        await Connection.Transacao.create({
            titulo,
            valor,
            tipo,
            categoria,
        })
        .then(function(response){
            verifica = response
        })

        if(verifica){
            return{
                transacao: verifica.dataValues,
                mnesagem: 'Cadastro de transação realizado com sucesso!'
            } 
        }else{
            throw new Error("Não foi possivel editar a transação")
        }
        
    } catch (error) {
        return error.message
    }
}

async function listaTodasTransacoes(){
    try {
        let transacoes = []
        await Connection.Transacao.findAll({
            raw: true,
        })
        .then(function(response){
            transacoes = response
        })
        return transacoes


    } catch (error) {
        return error.message
    }
}

async function listaTransacao(id){
    try {
        let transacao
        await Connection.Transacao.findAll({
            where: {
                id
            }
        })
        .then(function(response){
            transacao = response
        })

        return transacao


    } catch (error) {
        return error.message
    }
}

async function deletarTransacao(id){
    try {
        let verifica
        await Connection.Transacao.destroy({
            where: {
                id
            }
        })
        .then(function(response){
            verifica = response
        })

        if(verifica){
            return 'Transacao deletada com sucesso!'
        }else{
            throw new Error("Não foi possivel deletar a transação")
        }
        
    } catch (error) {
        return error.message
    }
}

async function editarTransacao(id, titulo, valor, tipo, categoria){
    try {

        if(!id){
            throw new Error("Id da transação não enviado")
        }
        
        if(!titulo){
            throw new Error("É necessário informar o título da transação")
        }

        if(!valor){
            throw new Error("É necessário informar o valor da transação")
        }

        if(!tipo){
            throw new Error("É necessário informar o tipo da transação")
        }

        if(!categoria){
            throw new Error("É necessário informar a categoria da transação")
        }

        let verifica
        await Connection.Transacao.update({
            titulo, 
            valor, 
            tipo, 
            categoria
        }, {
        where: {
            id
        }
        })
        .then(function(response){
            verifica = response[0]
        })

        if(verifica){
            return 'Transacao editada com sucesso!'
        }else{
            throw new Error("Não foi possivel editar a transação")
        }
        
    } catch (error) {
        return error.message
    }
}

module.exports = ControllerTransacao;