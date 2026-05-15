// Routes define WHICH URL + HTTP METHOD maps to WHICH controller function.

//  URL pattern          HTTP Method   Controller function
//  /api/students        GET      →    getAllStudents
//  /api/students/:id    GET      →    getStudentById
//  /api/students        POST     →    createStudent
//  /api/students/:id    PUT      →    updateStudent
//  /api/students/:id    DELETE   →    deleteStudent

const express = require('express');
const router = express.Router();
const controller = require('../controllers/student');

router.get('/', controller.getAllStudents); //READ/GET ALL students

router.post('/getbyid/:id', controller.getStudentById); // READ/GET ONE student by id
// router.post('/getById', controller.getStudentById); // READ/GET ONE student by id

router.post('/create', controller.createStudent); // CREATE a new student

router.put('/update/:id', controller.updateStudent); //UPDATE an existing student

router.delete('/delete/:id', controller.deleteStudent); // DELETE a student

module.exports = router;