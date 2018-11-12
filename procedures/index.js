const config = require('../config')
const connection = config

module.exports = {
  cadastarFuncionario(nome, cpf, cargo, salario) {
    let novoUser = `INSERT INTO funcionario(nome, cpf, cargo, salario) VALUES(?,?,?,?)`;  
    let dados = [nome, cpf, cargo, salario]
    connection.query(novoUser, dados, (error, results, fields) => {
      if (error) {
        return console.error(error.message);
      }
        console.log(results.affectedRows);
        console.log(
         `Nome: ${nome}, 
          CPF: ${cpf}, 
          Cargo: ${cargo}, 
          Salario: ${salario}`)
      });
  },

  view_consultar_registro() {
    let consulta = `SELECT * FROM todoapp.consultar_registros;`
    connection.query(consulta, true, (error, results, fields) => {
      if (error){
        return console.log(error.message);
      }
       console.log('Registros:', results[0]);
    })
  },

  deletarUser(nome){
    let sql = `DELETE FROM usuarios WHERE nome = ?`;
    connection.query(sql, nome, (error, results, fields) => {
      if (error)
        return console.error(error.message);
      console.log('Delete:', results.affectedRows);
    });
  },

  mostrar() {
    let filterTodo = `CALL filterTodo(?)`;
    connection.query(filterTodo, (error, results, fields) => {
      if (error) {
        return console.error(error.message);
      }
        console.log(results[0]);
     });    
  },

  cadastarUser(user, senha) {
    let novoUser = `INSERT INTO usuarios(nome,senha) VALUES(?,?)`;  
    let dados = [user, senha]
    connection.query(novoUser, dados, (error, results, fields) => {
      if (error) {
        return console.error(error.message);
      }
        console.log(results);
    });
  },

  listar_usuarios() {
    let listaUser = `CALL listUser()`;
    connection.query(listaUser, true, (error, results, fields) => {
      if (error) {
        return console.error(error.message);
      }
        return console.log(results[0]);
       // const resultado = results[0]
    });
  },
    
  salario(salario) {
    let todo = ['Hugo Dias','123',salario];
    connection.query(insertSalario, todo, (err, results, fields) => {
      if (err) {
        return console.error(err.message);
      }
      console.log('Todo Id:' + results.insertId);
  });
 }
}