/********************************************
Carregando módulos 
*********************************************/

const express = require('express')
const router = express.Router()
const ControllerTransacao = require('../controller/ControllerTransacao')
const jwt = require('jsonwebtoken')
const SECRET = 'appweb2'

/********************************************
Configurações 
*********************************************/

router.use(express.static('public'));

/********************************************
Rotas
*********************************************/

router.get('/transacao/:id', verificaJWT, async (req, res) =>{
    let id = req.params.id
    await ControllerTransacao.deletarTransacao(id)
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