// EditEmployee.js

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import "../styles/edit-styles.css";

const EditEmployee = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    position: "",
  });

  useEffect(() => {
    // Fetch employee data based on the ID
    fetch(`/api/v1/employees/${id}`)
      .then((response) => response.json())
      .then((data) => setEmployee(data[0]))
      .catch((error) => console.error("Error fetching employee data:", error));
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevEmployee) => ({ ...prevEmployee, [name]: value }));
  };

  const handleUpdateEmployee = () => {
    // Make a PUT request to update employee data
    fetch(`/api/v1/employees/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employee),
    })
      .then((response) => response.text())
      .then((message) => {
        console.log(message);
        // // Redirect to the employee list page after successful update
        // history.push('/employees');
        // Redirect to the employee profile page after successful update
        navigate(`/employee/${id}`);
      })
      .catch((error) => console.error("Error updating employee:", error));
  };

  return (
    <div>
      <h2>Edit Employee</h2>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={employee.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={employee.email}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Position:
          <input
            type="text"
            name="position"
            value={employee.position}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="button" onClick={handleUpdateEmployee}>
          Update Employee
        </button>
      </form>
    </div>
  );
};

export default EditEmployee;
