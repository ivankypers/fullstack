CREATE DATABASE my_database;

\connect my_database;

CREATE TABLE authors (
    author_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    birth_date DATE,
    num_books INTEGER
);

CREATE TABLE books (
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    publication_date DATE,
    price NUMERIC(10, 2),
    author_id INTEGER REFERENCES authors(author_id)
);

INSERT INTO authors (name, birth_date, num_books) VALUES
('J.K. Rowling', '1965-07-31', 7),
('George R.R. Martin', '1948-09-20', 5),
('J.R.R. Tolkien', '1892-01-03', 4);

INSERT INTO books (title, publication_date, price, author_id) VALUES
('Harry Potter and the Philosopher\'s Stone', '1997-06-26', 19.99, 1),
('A Game of Thrones', '1996-08-06', 24.95, 2),
('The Hobbit', '1937-09-21', 15.00, 3);
