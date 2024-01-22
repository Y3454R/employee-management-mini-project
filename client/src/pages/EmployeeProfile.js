// EmployeeProfile.js

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/profile-styles.css";

const EmployeeProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await fetch(`/api/v1/employees/${id}`);
        const data = await response.json();

        // Use data[0] to access the employee object in the array
        setEmployee(data[0]);
      } catch (error) {
        console.error("Error fetching employee data:", error);
      }
    };

    fetchEmployeeData();
  }, [id]);

  const handleEditClick = () => {
    // Navigate to the edit page with the employee ID
    navigate(`/${id}/edit`);
  };

  const handleRemoveClick = async () => {
    try {
      const response = await fetch(`/api/v1/employees/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        console.log("Employee removed successfully!");
        // Navigate to the employees list page with a success message
        navigate("/employees", {
          state: { successMessage: "Employee removed successfully!" },
        });
      } else {
        console.error("Error removing employee:", response.statusText);
        // Navigate to the employees list page with an error message
        navigate("/employees", {
          state: { errorMessage: "Failed to remove employee." },
        });
      }
    } catch (error) {
      console.error("Error removing employee:", error.message);
      // Navigate to the employees list page with an error message
      navigate("/employees", {
        state: { errorMessage: "Failed to remove employee." },
      });
    }
  };

  if (!employee) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-container">
      <h1>Employee Profile</h1>
      <div className="profile-details">
        <div>
          <strong>ID:</strong> {employee.id}
        </div>
        <div>
          <strong>Name:</strong> {employee.name}
        </div>
        <div>
          <strong>Position:</strong> {employee.position}
        </div>
        <div>
          <strong>Email:</strong> {employee.email}
        </div>
        {/* Add more details as needed */}
      </div>
      <div>
        <button onClick={handleEditClick} className="edit-button">
          Edit
        </button>
        <button onClick={handleRemoveClick} className="remove-button">
          Remove
        </button>
      </div>
    </div>
  );
};

export default EmployeeProfile;
