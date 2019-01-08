const mysql = require("mysql");
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Pipandpop1',
  database: 'burgers_db'
});

connection.connect();
module.exports = connection;
