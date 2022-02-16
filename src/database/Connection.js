/********************************************
Carregando módulos 
*********************************************/

const Sequelize = require ('sequelize')

/********************************************
Configuração
*********************************************/

const sequelize = new Sequelize('sistemafinanceiro', 'root', 'root', {
    host: '127.0.0.1',
    dialect: 'mysql'
})

/********************************************
Models
*********************************************/

const Categorias = sequelize.define('categorias',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    categoria: {
        type: Sequelize.TEXT
    },
})


const Transacao = sequelize.define('transacoes',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    titulo: {
        type: Sequelize.TEXT
    },
    valor: {
        type: Sequelize.FLOAT
    },
    tipo: {
        type: Sequelize.STRING
    },
    categoria: {
        type: Sequelize.INTEGER,
        model: 'categorias',
        key: 'id'
    }
})

const Contatos = sequelize.define('contatos', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: Sequelize.TEXT
    },
    email: {
        type: Sequelize.TEXT
    },
    mensagem: {
        type: Sequelize.TEXT
    }
})

const Usuarios = sequelize.define('usuarios', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: Sequelize.TEXT
    },
    senha: {
        type: Sequelize.TEXT
    },
    email: {
        type: Sequelize.TEXT
    }
})

const TokenBlacklist = sequelize.define('token-blacklist', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    token: {
        type: Sequelize.TEXT
    }
})




var Connection = {
    Categorias,
    Transacao,
    Contatos,
    Usuarios,
    TokenBlacklist
}



module.exports = Connection;