/********************************************
Carregando módulos 
*********************************************/

const express = require('express')
const router = express.Router()
const ControllerTransacao = require('../controller/ControllerTransacao')

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

/********************************************
Exportação
*********************************************/
module.exports = router