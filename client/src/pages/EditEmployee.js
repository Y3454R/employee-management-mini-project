// EditEmployee.js

import React, { useState, useEffect } from "react";
import { useAuth } from "../AuthContext";
import { useParams, useNavigate } from "react-router-dom";

import "../styles/edit-styles.css";

const EditEmployee = () => {
  const { id } = useParams();

  const { authToken } = useAuth();

  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    position: "",
  });

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await fetch(`/api/v1/employees/${id}`, {
          headers: {
            Authorization: `Bearer ${authToken}`, // Include the authentication token
          },
        });
        const data = await response.json();

        // Use data[0] to access the employee object in the array
        setEmployee(data[0]);
      } catch (error) {
        console.error("Error fetching employee data:", error);

        // If unauthorized, redirect to login page or handle authentication error
        if (error.response && error.response.status === 401) {
          navigate("/login");
        }
      }
    };

    fetchEmployeeData();
  }, [id, authToken, navigate]);

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
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify(employee),
    })
      .then((response) => response.text())
      .then((message) => {
        console.log(message);
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
