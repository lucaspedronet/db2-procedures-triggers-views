const express = require('express')
const routes = express.Router();
const bodyParser = require('body-parser')
const procedure = require('./procedures/index')

routes.use(bodyParser.urlencoded({ extended: false }));

routes.get('/cadastrar/funcionario', (req, res) => {
  res.render('cadastrarFuncionario')
})

routes.post(`/registro/funcionario`, (req, res) => {
  const { nome, cpf, cargo, salario } = req.body
  procedure.cadastarFuncionario(nome, cpf, cargo, salario)
  res.send(`Nome: ${req.body.nome}`)
})

routes.get('/', (req, res) => {
  res.render('cadastrarUsuario')
})

routes.post('/auth', (req, res) => {
  procedure.cadastarUser(req.body.username, req.body.password)
  procedure.listar_usuarios()
  res.render('cadastrarUsuario', { });
});

 routes.get('/demitir', (req, res) => {
   res.render('deletado');
 })


routes.post('/excluido', (req, res) => {
  procedure.deletarUser(req.body.nome)
  res.send(`Funcioário ${req.body.nome} demitido com sucesso!`)
    console.log(req.body);
    // res.send(req.body.nome);
})


// rota para rigistro de funcionários
routes.get('/sistema', (req, res) => {
 res.render('index')
})

//consultar registros de funcionários
routes.post('/registro', (req, res) => {
  console.log(req.body.registro)
  procedure.view_consultar_registro()
  res.send('Funcionou!')  
})

module.exports = routes;