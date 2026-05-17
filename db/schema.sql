CREATE DATABASE IF NOT EXISTS college;

USE college;

CREATE TABLE IF NOT EXISTS student (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS teacher (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    subject VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO student(name, email)
VALUES
('Shrawi', 'shrawi@gmail.com'),
('Vincenzo', "vincenzo@gmail.com"),
('Minjoon', "minjoon@gmail.com"),
('Henry', "henry@gmail.com");

INSERT INTO teacher(name, email, subject)
VALUES
("Rose", "rose@gmail.com", "Mathematics"),
("Jiwoo", "jiwoo@gmail.com", "Physics"),
("Bora", "bora@gmail.com", "Chemistry"),
("Yuri", "yuri@gmail.com", "Computer Science");