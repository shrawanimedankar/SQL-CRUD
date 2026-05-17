require("dotenv").config();
const express = require("express");
const app = express();

const pool = require("./config/db");

const PORT = process.env.PORT || 3000;

app.use(express.json());

const studentRoutes = require("./routes/student.js");
// const teacherRoutes = require("./routes/teacher.js");

// Test MySQL Connection
pool.query("SELECT 1")
  .then(() => {
    console.log("MySQL Connected Successfully");
  })
  .catch((err) => {
    console.log("MySQL Connection Failed");
    console.log(err);
  });

//Home route
app.get("/", (req, res) => {
  res.send("Server Running");
});

app.use("/api/students", studentRoutes);
// app.use("/api/teachers", teacherRoutes);

// Error Handling - If No route Matches
app.use((req, res)=>{
    res.status(404).json({success:false, message:`Route not found - ${req.method} ${req.url} `})
});

// Start server
app.listen(PORT, () => {
  console.log(`Base URL: http://localhost:${PORT}`);
  console.log(`API: http://localhost:${PORT}/api/students`);
});