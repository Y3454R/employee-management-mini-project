const getEmployees = "SELECT * FROM employees";

const getEmployeeById = "SELECT * FROM employees WHERE id = $1";

// const checkEmailExists = "SELECT s FROM students s WHERE s.email = $1";

// const addStudent =
//   "INSERT INTO students (name, email, age, dob) VALUES ($1, $2, $3, $4)";

// const removeStudent = "DELETE FROM students WHERE id = $1";

const updateEmployee =
  "UPDATE employees SET name = $1, email = $2, position = $3 WHERE id = $4";

module.exports = {
  getEmployees,
  getEmployeeById,
  updateEmployee,
};
