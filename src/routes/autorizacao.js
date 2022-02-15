/********************************************
Carregando módulos 
*********************************************/

const express = require('express')
const router = express.Router()
const ControllerAutorizacao = require('../controller/ControllerAutorizacao');
const jwt = require('jsonwebtoken');
const SECRET = 'appweb2'

/********************************************
Configurações 
*********************************************/

router.use(express.static('public'));

/********************************************
Rotas
*********************************************/

router.post('/login', async (req, res) =>{
    let{email, senha} = req.body
    login1 = await ControllerAutorizacao.login(email, senha)
    if(login1.status){
        const token = jwt.sign({
            userID: login1.userID,
            },
            SECRET,
            {
                expiresIn: 1200
        })
        res.json({
            login1,
            token  
        })
    }else{
        res.status(401).json({
            login1,
        })
        .end()
    }
})

/********************************************
Exportação
*********************************************/
module.exports = router