// EmployeeProfile.js

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/profile-styles.css";

const EmployeeProfile = () => {
  const { id } = useParams();
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
    console.log("Edit button clicked for employee ID:", id);
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
      <button onClick={handleEditClick} className="edit-button">
        Edit Profile
      </button>
    </div>
  );
};

export default EmployeeProfile;
