const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: '127.0.0.1',
  database: 'security',
  user: 'root',
  password: 'your-pw',
  // multipleStatements: true, false
});

module.exports = pool;
