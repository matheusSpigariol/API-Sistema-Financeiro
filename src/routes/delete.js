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

router.get('/transacao/:id', async (req, res) =>{
    let id = req.params.id
    await ControllerTransacao.deletarTransacao(id)
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