/********************************************
Carregando módulos 
*********************************************/

const Connection = require('../database/Connection')


var ControllerToken = {
    addTokenBlackList,
    verificaToken
}

async function addTokenBlackList(token){
    try {
        
        await Connection.TokenBlacklist.create({
            token
        })

        return true

    } catch (error) {
        return false
    }
}

async function verificaToken(token){
    try {
        
        let status
        await Connection.TokenBlacklist.findAll({
            where: {
                token
            }
        })
        .then(function(response){
            status = response
        })

        console.log(status);

        return true

    } catch (error) {
        return false
    }
}


module.exports = ControllerToken;