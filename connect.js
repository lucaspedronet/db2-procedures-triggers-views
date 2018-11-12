
let connection = require('./config')

connection.connect(function(err) {
  if(err) {
    return console.error('error: ' + err.message);
  }
  console.log('Conneced to the MySql server');

  let createTodos = `create table if not exists todos(
    id int primary key auto_increment,
    title varchar(255)not null,
    completed tinyint(1) not null default 0)`;

connection.query(createTodos, function(err, results, fields) {
  if (err) {
    console.log(err.message);
  }
});

});