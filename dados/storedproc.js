const config = require('./config')
const connection = config
 
let sql = `CALL filterTodo(?)`;
 
connection.query(sql, true, (error, results, fields) => {
  if (error) {
    return console.error(error.message);
  }
  console.log(results[0]);
});
 
connection.end();