const express = require('express')
const routes = express.Router();
const bodyParser = require('body-parser')
const procedure = require('./procedures/index')

routes.use(bodyParser.urlencoded({ extended: false }));

routes.get('/funcionario/:id', (req, res) => {
  return res.send('Funcionou!')
})

 routes.get('/funcionario/salario/:salario', (req, res) => {
    procedure.salario(req.params.salario)
    return res.send('Aumento aplicado!')
  })

routes.get('/', (req, res) => {
  res.render('cadastarUser')
})

routes.post('/auth', (req, res) => {
  procedure.cadastarUser(req.body.username, req.body.password)
  procedure.listar_usuarios()
  res.render('cadastarUser', { });
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

module.exports = routes;