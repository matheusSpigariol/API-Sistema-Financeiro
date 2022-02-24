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

router.get('/todas/categorias', verificaJWT, async (req, res) =>{
    categorias = await ControllerCategoria.listarTodasCategorias()
    res.json({
        categorias  
    })
})

router.get('/categoria/:id', verificaJWT, async (req, res) =>{
    let id = req.params.id
    categoria = await ControllerCategoria.listarCategoria(id)
    res.json({
        categoria  
    })
})

/********************************************
Funções
*********************************************/

function verificaJWT(req, res, next){
    const token = req.headers['x-access-token']
    jwt.verify(token, SECRET, (err, decoded)=>{
        if(err){
            return res.status(401).json({
                mensagem: 'Token inválido'
            }).end()
        }

        req.userID = decoded.userID
        next()
    })
}


/********************************************
Exportação
*********************************************/
module.exports = router