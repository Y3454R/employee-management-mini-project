CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    position VARCHAR(100) NOT NULL
);

INSERT INTO employees (name, email, position)
VALUES
  ('employee', 'employee1@example.com', 'Position 1');


INSERT INTO employees (name, email, position)
VALUES
  ('employee2', 'employee2@example.com', 'Position 2');


INSERT INTO employees (name, email, position)
VALUES
  ('employee3', 'employee3@example.com', 'Position 3');