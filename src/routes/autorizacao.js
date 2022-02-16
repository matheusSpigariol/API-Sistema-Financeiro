/********************************************
Carregando módulos 
*********************************************/

const express = require('express')
const router = express.Router()
const ControllerAutorizacao = require('../controller/ControllerAutorizacao');
const ControllerToken = require('../controller/ControllerToken');
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

        let status = ControllerToken.verificaTokenBlackList(token)
        if(!status){
            res.status(401).json({
                mensagem: 'Token expirado'
            })
        }
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


router.post('/logout', async (req, res) =>{
    let {token} = req.body
    let status = ControllerToken.addTokenBlackList(token)
    if(status){
        res.json({
            mensagem: 'Logout efetuado com sucesso!' 
        })
    }else{
        res.json({
            mensagem: 'Não foi possível fazer o logout' 
        })
    }

})

/********************************************
Exportação
*********************************************/
module.exports = router