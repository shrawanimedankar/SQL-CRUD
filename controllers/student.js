const db = require('../config/db');

// ─── READ ALL  ───  GET /api/students
const getAllStudents = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM student ORDER BY id ASC');
        // console.log(rows[3]);
        res.status(200).json({ success: true, count: rows.length, data: rows });
    } catch (error) {
        console.error('getAllStudents error:', error.message);
        res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
};

// ─── READ ONE ── GET /api/students/getbyId/:id
const getStudentById = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows] = await db.query('SELECT * FROM student WHERE id = ?', [id]);

        if (rows.length === 0) {
            return res.status(404).json({ success: false, message: `Student with id ${id} not found` });
        }
        else {
            res.status(200).json({ success: true, data: rows[0] });
        }
    } catch (error) {
        console.error('getStudentById error:', error.message);
        res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
};

// ─── CREATE ──── POST /api/students/create
// Body (JSON): { "name": "Shrawi", "email": shrawi@gmail.com }
const createStudent = async (req, res) => {
    try {
        const { name, email, created_at } = req.body;
        if (!name || !email) {
            return res.status(400).json({ success: false, message: 'Please provide name and email'});
        }
        const [result] = await db.query( 'INSERT INTO student(name, email) VALUES(?,?)', [name, email]);
        console.log("Result:", result);

        // const [rows] = await db.query( 'SELECT * FROM student WHERE id = ?', [result.insertId] );
        // console.log(rows[0]);
        res.status(201).json({ success: true, message: 'Student created successfully', data: {id: result.insertId, name, email, created_at}}); // result.insertId gives us the auto-generated id
    }
    catch (error) {
        if (error.code === 'ER_DUP_ENTRY') { 
            return res.status(409).json({ success: false, message: 'A student with that email already exists' });
        }
        console.error('createStudent error:', error.message);
        res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
};

// ─── UPDATE ─── PUT /api/students/:id
// Body (JSON): { "name": "...", "email": "..."}
const updateStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email } = req.body;
         if (!name || !email) {
            return res.status(400).json({ success: false, message: 'Please provide name and email'});
        }

        const [result] = await db.query('UPDATE student SET name = ?, email = ? WHERE id = ?', [name, email, id]);

        if (result.affectedRows === 0) {     // affectedRows = 0 means no row matched that id
            return res.status(404).json({ success: false, message: `Student with id ${id} not found` });
        }
        res.status(200).json({ success: true, message: 'Student updated successfully', data: {id: parseInt(id), name, email }});
    } 
    catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(409).json({ success: false, message: 'Student with that email already exists' });
        }
        console.error('updateStudent error:', error.message);
        res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
};

// ─── DELETE ──── DELETE /api/students/:id
const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;

        const [result] = await db.query('DELETE FROM student WHERE id = ?', [id]);

        // const [rows] = await db.query( 'SELECT * FROM student WHERE id = ?', [result.insertId] );
        // console.log(rows[0]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ success: false, message: `Student with id ${id} not found` });
        }
        res.status(200).json({ success: true, message: `Student with id ${id} deleted successfully` });
    } 
    catch (error) {
        console.error('deleteStudent error:', error.message);
        res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
};

module.exports = { getAllStudents, getStudentById, createStudent, updateStudent, deleteStudent};