const pool = require("../../db");
const queries = require("./queries");

const addEmployee = (req, res) => {
  const { name, email, position } = req.body;
  // check if the email exists already
  pool.query(queries.checkEmailExists, [email], (error, results) => {
    if (error) throw error;
    if (results.rows.length) {
      res.send("Email already exists.");
      return;
    }
    // add employee to db
    pool.query(
      queries.addEmployee,
      [name, email, position],
      (error, results) => {
        if (error) throw error;
        res.status(201).send("Employee added successfully");
      }
    );
  });
};

const getEmployees = (req, res) => {
  pool.query(queries.getEmployees, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const removeEmployee = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getEmployeeById, [id], (error, results) => {
    if (error) throw error;
    const noEmployeeFound = !results.rows.length;
    if (noEmployeeFound) {
      res.send("Does not exist.");
      return;
    }
    pool.query(queries.removeEmployee, [id], (error, results) => {
      if (error) throw error;
      res.status(200).send("Employee removed successfully");
    });
  });
};

const getEmployeeById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getEmployeeById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const updateEmployee = (req, res) => {
  const id = parseInt(req.params.id);
  // console.log(req.body);
  let { name, email, position } = req.body;
  pool.query(queries.getEmployeeById, [id], (error, results) => {
    if (error) throw error;
    const noEmployeeFound = !results.rows.length;
    if (noEmployeeFound) {
      res.send("Does not exist!");
      return;
    }
    const employee = results.rows[0];
    if (!name) name = employee.name;
    if (!email) email = employee.email;
    if (!position) position = employee.position;

    pool.query(
      queries.updateEmployee,
      [name, email, position, id],
      (error, results) => {
        if (error) throw error;
        res.status(200).send("Updated successfully!");
      }
    );
  });
};

module.exports = {
  addEmployee,
  getEmployees,
  getEmployeeById,
  updateEmployee,
  removeEmployee,
};
