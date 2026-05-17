require('dotenv').config();
const mysql = require("mysql2");

const pool = mysql.createPool({
    host: process.env.DB_HOST,      
    user: process.env.DB_USER,      
    password: process.env.DB_PASSWORD,  
    database: process.env.DB_NAME,      
    port: process.env.DB_PORT || 3306,
    waitForConnections: true, //If all connections are busy, new requests will wait.
    connectionLimit: 10, //Maximum 10 database connections allowed at same time.
    queueLimit: 0 //No limit on waiting requests.
});

module.exports = pool.promise(); // .promise() lets us use async/await instead of callbacks