require('dotenv').config();
const express = require('express');
const app = express();
const pool = require("./config/db");

const PORT = process.env.PORT || 3000;

app.use(express.json());

const studentRoutes  = require('./routes/student.js');

// Test MySQL Connection
pool.query("SELECT 1")
    .then(() => {
        console.log("MySQL Connected Successfully");
    })
    .catch((err) => {
        console.log("MySQL Connection Failed");
        console.log(err);
    });


app.get("/", (req, res) => {
    res.send("Server Running");
});

app.use('/api/students', studentRoutes);

app.use((err, req, res, next) => {
  let { statusCode = 404, message = `Route ${req.method} ${req.url} not found`} = err;
  res.status(statusCode).json({ success: false, message: message });
});

app.listen(PORT, () =>{
    console.log(`Server is listening on ${PORT}`);
});
