const express = require('express')
const nunjuck = require('nunjucks')
const path = require('path')
const app = express();

nunjuck.configure('views', {
  autoescape: true,
  express: app  
});

app.set('view engine', 'njk')
app.set('views', path.join(__dirname, 'views'))

app.use(require('./routes'))

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
 })