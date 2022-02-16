/********************************************
Carregando módulos 
*********************************************/

const Connection = require('../database/Connection')


var ControllerToken = {
    addTokenBlackList,
    verificaTokenBlackList
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

async function verificaTokenBlackList(token){
    try {
        
        await Connection.TokenBlacklist.findAll({
            where: {
                token
            }
        })
        .then(function(response){
            if(response.length == 0){
                throw new Error
            }
        })
        
        return true

    } catch (error) {
        return false
    }
}


module.exports = ControllerToken;