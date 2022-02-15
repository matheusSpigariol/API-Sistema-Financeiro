/********************************************
Carregando módulos 
*********************************************/

const express = require('express')
const router = express.Router()
const ControllerTransacao = require('../controller/ControllerTransacao')
const ControllerUsuario = require('../controller/ControllerUsuario')

/********************************************
Configurações 
*********************************************/

router.use(express.static('public'));

/********************************************
Rotas
*********************************************/

router.post('/transacao', async (req, res) =>{
    let{id, titulo, valor, tipo, categoria} = req.body
    await ControllerTransacao.editarTransacao(id, titulo, valor, tipo, categoria)
    .then(function(response){
        res.json({
            mensagem: response
        })
    })
})

router.post('/usuario', async (req, res) =>{
    let{id,nome, senha, email} = req.body
    await ControllerUsuario.editarUsuario(id,nome, senha, email)
    .then(function(response){
        res.json({
            mensagem: response
        })
    })
})

/********************************************
Exportação
*********************************************/
module.exports = router