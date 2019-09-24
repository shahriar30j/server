// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'node-complete',
//     password: '1234@1234'
// });


// // ALTER USER 'root'@'localhost' IDENTIFIED BY 'your new password'; 
// // ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your new password';

// module.exports = pool.promise(); 

const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', '1234@1234',{
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;