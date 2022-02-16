/********************************************
Carregando módulos 
*********************************************/

const express = require('express')
const router = express.Router()
const ControllerTransacao = require('../controller/ControllerTransacao')
const ControllerUsuario = require('../controller/ControllerUsuario')
const jwt = require('jsonwebtoken')
const SECRET = 'appweb2'

/********************************************
Configurações 
*********************************************/

router.use(express.static('public'));

/********************************************
Rotas
*********************************************/

router.post('/transacao', verificaJWT, async (req, res) =>{
    let{id, titulo, valor, tipo, categoria} = req.body
    await ControllerTransacao.editarTransacao(id, titulo, valor, tipo, categoria)
    .then(function(response){
        res.json({
            mensagem: response
        })
    })
})

router.post('/usuario', verificaJWT, async (req, res) =>{
    let{id,nome, senha, email} = req.body
    await ControllerUsuario.editarUsuario(id,nome, senha, email)
    .then(function(response){
        res.json({
            mensagem: response
        })
    })
})

/********************************************
Funções
*********************************************/

function verificaJWT(req, res, next){
    const token = req.headers['x-access-token']
    jwt.verify(token, SECRET, async (err, decoded)=>{
        let invalido
        await ControllerToken.verificaTokenBlackList(token)
        .then(function(response){
            invalido = response
        })

        if(invalido){
            return res.status(401).json({
                mensagem: 'Token inválido'
            }).end()
        }else{
            if(err){
                return res.status(401).json({
                    mensagem: 'Token inválido'
                }).end()
            }else{
                req.userID = decoded.userID
                next()
            }
        }

    })
}

/********************************************
Exportação
*********************************************/
module.exports = router