/********************************************
Carregando módulos 
*********************************************/

const express = require("express")
const app = express()
const cors = require('cors')
const cadastro = require('./src/routes/create')
const listar = require('./src/routes/read')
const deletar = require('./src/routes/delete')
const editar = require('./src/routes/update')
const autorizacao = require('./src/routes/autorizacao')
const bodyParser = require('body-parser')

/********************************************
Declaração da porta que o servidor irá rodar 
*********************************************/

const PORT = process.env.PORT || 3000;

/********************************************
Configurações 
*********************************************/

app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json())
app.use(cors())

/********************************************
Rotas
*********************************************/

app.use('/cadastro', cadastro)

app.use('/listar', listar)

app.use('/deletar', deletar)

app.use('/editar', editar)

app.use('/autorizacao', autorizacao)



/********************************************
Iniciando servidor
*********************************************/

app.listen(PORT, function(){
    console.log("Servidor rodando na porta "+ PORT);
});