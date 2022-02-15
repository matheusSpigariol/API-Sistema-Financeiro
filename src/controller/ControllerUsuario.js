/********************************************
Carregando módulos 
*********************************************/

const Connection = require('../database/Connection')
const crypto = require('crypto')

var ControllerUsuario = {
    criarUsuario,
    editarUsuario,
    listarUsuario
}

async function criarUsuario(nome, senha, email){
    try {

        if(!nome){
            throw new Error("É necessário informar o título da transação")
        }else if(nome.length <= 3){
            throw new Error("O nome deve ter ao menos 4 letras")
        }

        if(!email){
            throw new Error("É necessário informar o email")
        }

        if(!senha){
            throw new Error("É necessário informar a senha")
        }

        senha = crypto.createHash('md5').update(senha).digest("hex")

        await Connection.Usuarios.findAll({
            where: {
                email
            }
        })
        .then(function(response){
            if(response.length != 0){
                throw new Error("Email já cadastrado.")
            }
        })

        let verifica
        await Connection.Usuarios.create({
            nome,
            senha,
            email,
        })
        .then(function(response){
            verifica = response
        })

        if(verifica){
            return 'Cadastrado com sucesso!'
        }else{
            throw new Error("Não foi possivel cadastrar o usuário")
        }
        
    } catch (error) {
        return error.message
    }
}

async function editarUsuario(id, nome, senha, email){
    try {

        if(!id){
            throw new Error("O id deve ser informado")
        }
        
        if(!nome){
            throw new Error("É necessário informar o título da transação")
        }else if(nome.length <= 3){
            throw new Error("O nome deve ter ao menos 4 letras")
        }

        if(!email){
            throw new Error("É necessário informar o email")
        }

        if(!senha){
            throw new Error("É necessário informar a senha")
        }

        let usuario
        await Connection.Usuarios.findAll({
            where: {
                id
            }
        })
        .then(function(response){
            usuario = response[0].dataValues
        })

        if(usuario.email != email){
            await Connection.Usuarios.findAll({
                where: {
                    email
                }
            })
            .then(function(response){
                if(response.length != 0){
                    throw new Error("Email já cadastrado para outro usuario.")
                }
            })
        }

        if(usuario.senha != senha){
            senha = crypto.createHash('md5').update(senha).digest("hex")
        }

        let verifica
        await Connection.Usuarios.update({
            nome, 
            senha, 
            email, 
        }, {
        where: {
            id
        }
        })
        .then(function(response){
            console.log(response);
            verifica = response[0]
        })

        if(verifica){
            return 'Editado com sucesso!'
        }else{
            throw new Error("Não foi possivel editar o usuário")
        }
        
    } catch (error) {
        return error.message
    }
}

async function listarUsuario(id){
    try {
        let usuario
        await Connection.Usuarios.findAll({
            where: {
                id
            }
        })
        .then(function(response){
            usuario = response
        })

        return usuario


    } catch (error) {
        return error.message
    }
}


module.exports = ControllerUsuario;