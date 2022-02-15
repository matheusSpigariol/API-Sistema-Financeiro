/********************************************
Carregando módulos 
*********************************************/

const Connection = require('../database/Connection')
const crypto = require('crypto')

var Autorizacao = {
    login,
}

async function login(email, senha){
    try {
        if(!email){
            throw new Error("Informe o email")
        }

        if(!senha){
            throw new Error("Informe a senha")
        }

        senha = crypto.createHash('md5').update(senha).digest("hex")

        let usuario
        await Connection.Usuarios.findAll({
            where: {
                email
            }
        })
        .then(function(response){
            if(response.length == 0){
                throw new Error("Email incorreto!")
            }
            usuario = response[0].dataValues
        })

        if(usuario.senha != senha){
            throw new Error("Senha incorreta!")
        }


        return {
            status: true,
            userID: usuario.id,
            mensagem: 'Sucesso!'
        }


    } catch (error) {
        return {
            status: false,
            mesangem: error.message
        }
    }
}


module.exports = Autorizacao;