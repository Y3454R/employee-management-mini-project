import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import "../styles/profile-styles.css";

const EmployeeProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { authToken } = useAuth();
  const [employee, setEmployee] = useState(null);

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

  const handleEditClick = () => {
    console.log("Edit button clicked for employee ID:", id);
    navigate(`/${id}/edit`);
  };

  const handleRemoveClick = async () => {
    try {
      const response = await fetch(`/api/v1/employees/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${authToken}`, // Include the authentication token
        },
      });

      if (response.ok) {
        console.log("Employee removed successfully!");
        navigate("/employees", {
          state: { successMessage: "Employee removed successfully!" },
        });
      } else {
        console.error("Error removing employee:", response.statusText);
        navigate("/employees", {
          state: { errorMessage: "Failed to remove employee." },
        });
      }
    } catch (error) {
      console.error("Error removing employee:", error.message);
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
