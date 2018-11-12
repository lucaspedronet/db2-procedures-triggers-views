// let mysql = require('mysql');
let config = require('./config.js');
 
let connection = config
 
// insert statment
let stmt = `INSERT INTO alunos(name,disciplina,nota)  VALUES ?  `;
let aluno = [
  ['Lucas Pedro', false],
  ['Sidney Jacomé', true]
];
 
// execute the insert statment
connection.query(stmt, [aluno], (err, results, fields) => {
  if (err) {
    return console.error(err.message);
  }
  // get inserted rows
  console.log('Row inserted:' + results.affectedRows);
});
 
// close the database connection
connection.end();