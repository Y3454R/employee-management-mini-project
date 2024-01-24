import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";
import EmployeeTable from "../components/EmployeeTable";
import { useNavigate } from "react-router-dom";

const EmployeeList = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div>
      <div>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
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
