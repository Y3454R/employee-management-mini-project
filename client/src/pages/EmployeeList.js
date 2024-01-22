import React from "react";
import { Link } from "react-router-dom";
import EmployeeTable from "../components/EmployeeTable";

const EmployeeList = () => {
  return (
    <div>
      <h1>Employee List</h1>
      <div>
        <Link to="/employees/add" className="add-button">
          <button>Add Employee</button>
        </Link>
      </div>
      <EmployeeTable />
    </div>
  );
};

export default EmployeeList;
