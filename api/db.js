'use strict';
const mysql = require('mysql');

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "nodedemo"
});

module.exports = db