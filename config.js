let mysql = require('mysql');
let config = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'todoapp'
});

module.exports = config;