// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'node-complete',
//     password: '1234@1234'
// });


// // ALTER USER 'root'@'localhost' IDENTIFIED BY 'your new password'; 
// // ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your new password';

// // module.exports = pool.promise(); 

// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('node-complete', 'root', '1234@1234',{
//     dialect: 'mysql',
//     host: 'localhost'
// });

// module.exports = sequelize;

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
    MongoClient.connect('mongodb+srv://shah:shah123@node-fjnih.mongodb.net/test?retryWrites=true&w=majority')
        .then(client => {
            console.log('Connected');
            _db = client.db();
            // callback(client);
            callback();
        })
        .catch(err => {
            console.log(err);
            throw err;
        });

};

const getDb = () => {
    if (_db) {
        return _db;
    }
    throw 'No Database Found';
};

// module.exports = mongoConnect;

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;