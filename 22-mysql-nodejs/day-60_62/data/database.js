const mysql = require('mysql2/promise');
const pswd = require('./data');

const pool = mysql.createPool({
  host: 'localhost',
  database: 'blog',
  user: 'root',
  password: pswd,
});

module.exports = pool;
