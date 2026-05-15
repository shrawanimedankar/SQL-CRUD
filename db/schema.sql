CREATE DATABASE IF NOT EXISTS college;

USE college;

CREATE TABLE IF NOT EXISTS student (
    id         INT AUTO_INCREMENT PRIMARY KEY,
    name       VARCHAR(100)  NOT NULL,
    email      VARCHAR(100)  NOT NULL UNIQUE,
    created_at TIMESTAMP     DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS teacher(
    id         INT AUTO_INCREMENT PRIMARY KEY,
    name       VARCHAR(100)  NOT NULL,
    email      VARCHAR(100)  NOT NULL UNIQUE,
    subject      VARCHAR(100)  NOT NULL ,
    created_at TIMESTAMP     DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO student (name, email) VALUES
    ('Alice Johnson',  'alice@example.com'),
    ('Bob Smith',      'bob@example.com'),
    ('Carol White',    'carol@example.com'),
    ('David Brown',    'david@example.com'),
    ('Eve Martinez',   'eve@example.com');

INSERT INTO teacher (name, email, subject) VALUES
    ('Alice Johnson',  'alice@example.com',  'Computer Science'),
    ('Bob Smith',      'bob@example.com',    'Data Science'),
    ('Carol White',    'carol@example.com',  'Web Development'),
    ('David Brown',    'david@example.com',  'Cybersecurity'),
    ('Eve Martinez',   'eve@example.com',    'AI & Machine Learning');