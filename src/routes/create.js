/********************************************
Carregando módulos 
*********************************************/

const express = require('express')
const router = express.Router()
const ControllerTransacao = require('../controller/ControllerTransacao')
const ControllerContatos = require('../controller/ControllerContatos')
const ControllerUsuario = require('../controller/ControllerUsuario')


/********************************************
Configurações 
*********************************************/

router.use(express.static('public'));

/********************************************
Rotas
*********************************************/

router.post('/transacao', async (req, res) =>{
    let{titulo, valor, tipo, categoria} = req.body
    await ControllerTransacao.cadastraTransacao(titulo, valor, tipo, categoria)
    .then(function(response){
        res.json({
            mensagem: response
        })

    })
})

router.post('/contato', async (req, res) =>{
    let{nome, email, mensagem} = req.body
    await ControllerContatos.criaContato(nome, email, mensagem)
    .then(function(response){
        res.json({
            mensagem: response
        })

    })
})

router.post('/usuario', async (req, res) =>{
    let{nome, senha, email} = req.body
    await ControllerUsuario.criarUsuario(nome, senha, email)
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