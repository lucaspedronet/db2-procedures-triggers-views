// let mysql  = require('mysql');
let config = require('./config');
let connection = config;

let sql = `INSERT INTO funcionario(nome,cpf,cargo) VALUES ? `;
let dados = [
    ['Fernandes', '152364', 'Médica'],
    ['Pryscilla Fernandes', '6458', 'Enfermeira']
]

connection.query(sql, [dados]);

connection.end();