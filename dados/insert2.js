let config = require('./config.js');
let connection = config;
 
let stmt = `INSERT INTO todos(title,completed)
            VALUES(?,?)`;
let todo = ['Biscoito Chocolate', true];
 
// execute the insert statment
connection.query(stmt, todo, (err, results, fields) => {
  if (err) {
    return console.error(err.message);
  }
  // get inserted id
  console.log('Todo Id:' + results.insertId);
});
 
connection.end();