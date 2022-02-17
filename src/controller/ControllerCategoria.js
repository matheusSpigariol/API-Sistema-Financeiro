/********************************************
Carregando módulos 
*********************************************/

const Connection = require('../database/Connection')

var ControllerCategoria = {
    listarTodasCategorias,
    listarCategoria,
}

async function listarTodasCategorias(){
    try {
        let categorias = []
        await Connection.Categorias.findAll({
            raw: true,
        })
        .then(function(response){
            categorias = response
        })
        return categorias


    } catch (error) {
        return error.message
    }
}

async function listarCategoria(id){
    try {
        let categoria
        await Connection.Categorias.findAll({
            where: {
                id
            }
        })
        .then(function(response){
            categoria = response
        })

        return categoria


    } catch (error) {
        return error.message
    }
}


module.exports = ControllerCategoria;