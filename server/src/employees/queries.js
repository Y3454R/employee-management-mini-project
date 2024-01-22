const getEmployees = "SELECT * FROM employees";

const getEmployeeById = "SELECT * FROM employees WHERE id = $1";

const checkEmailExists = "SELECT e FROM employees e WHERE e.email = $1";

const addEmployee =
  "INSERT INTO employees (name, email, position) VALUES ($1, $2, $3)";

const removeEmployee = "DELETE FROM employees WHERE id = $1";

const updateEmployee =
  "UPDATE employees SET name = $1, email = $2, position = $3 WHERE id = $4";

module.exports = {
  getEmployees,
  addEmployee,
  checkEmailExists,
  getEmployeeById,
  updateEmployee,
  removeEmployee,
};
