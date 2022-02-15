/********************************************
Carregando módulos 
*********************************************/

const express = require('express')
const router = express.Router()
const ControllerTransacao = require('../controller/ControllerTransacao');
const ControllerUsuario = require('../controller/ControllerUsuario');
const ControllerValores = require('../controller/ControllerValores')

/********************************************
Configurações 
*********************************************/

router.use(express.static('public'));

/********************************************
Rotas
*********************************************/

router.get('/todas/transacoes', async (req, res) =>{
    transacoes = await ControllerTransacao.listaTodasTransacoes()
    res.json({
        transacoes  
    })
})

router.get('/transacao/:id', async (req, res) =>{
    let id = req.params.id
    transacao = await ControllerTransacao.listaTransacao(id)
    res.json({
        transacao  
    })
})

router.get('/transacoes/valores', async (req, res) =>{
    let id = req.params.id
    transacao = await ControllerValores.getValores()
    res.json({
        transacao  
    })
})

router.get('/usuario/:id', async (req, res) =>{
    let id = req.params.id
    usuario = await ControllerUsuario.listarUsuario(id)
    res.json({
        usuario  
    })
})


/********************************************
Exportação
*********************************************/
module.exports = router