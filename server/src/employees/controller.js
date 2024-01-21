const pool = require("../../db");
const queries = require("./queries");

const getEmployees = (req, res) => {
  pool.query(queries.getEmployees, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
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
  getEmployees,
  getEmployeeById,
  updateEmployee,
};
