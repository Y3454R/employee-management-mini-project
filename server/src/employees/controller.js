const pool = require("../../db");
const queries = require("./queries");

const getEmployees = (req, res) => {
  pool.query(queries.getEmployees, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

module.exports = {
  getEmployees,
};
