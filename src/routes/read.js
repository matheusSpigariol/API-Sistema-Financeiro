/********************************************
Carregando módulos 
*********************************************/

const express = require('express')
const router = express.Router()
const ControllerTransacao = require('../controller/ControllerTransacao');
const ControllerUsuario = require('../controller/ControllerUsuario');
const ControllerValores = require('../controller/ControllerValores')
const jwt = require('jsonwebtoken')
const SECRET = 'appweb2'

/********************************************
Configurações 
*********************************************/

router.use(express.static('public'));

/********************************************
Rotas
*********************************************/

router.get('/todas/transacoes', verificaJWT, async (req, res) =>{
    transacoes = await ControllerTransacao.listaTodasTransacoes()
    res.json({
        transacoes  
    })
})

router.get('/transacao/:id', verificaJWT, async (req, res) =>{
    let id = req.params.id
    transacao = await ControllerTransacao.listaTransacao(id)
    res.json({
        transacao  
    })
})

router.get('/transacoes/valores', verificaJWT, async (req, res) =>{
    let id = req.params.id
    transacao = await ControllerValores.getValores()
    res.json({
        transacao  
    })
})

router.get('/usuario/:id', verificaJWT, async (req, res) =>{
    let id = req.params.id
    usuario = await ControllerUsuario.listarUsuario(id)
    res.json({
        usuario  
    })
})

/********************************************
Funções
*********************************************/

function verificaJWT(req, res, next){
    console.log(req);
    const token = req.headers['Authorization']
    jwt.verify(token, SECRET, (err, decoded)=>{
        if(err) return res.status(401)

        req.userID = decoded.userID
        next()
    })
}


/********************************************
Exportação
*********************************************/
module.exports = router