import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/edit-styles.css";

const AddEmployee = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/v1/employees/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Add logic for successful submission
        console.log("Employee added successfully!");
        // Navigate to "/employees" with a success message
        navigate("/employees", {
          state: { successMessage: "Employee added successfully!" },
        });
      } else {
        // Add logic for unsuccessful submission
        console.error("Error adding employee:", response.statusText);
        // Navigate to "/employees" with an error message
        navigate("/employees", {
          state: { errorMessage: "Failed to add employee." },
        });
      }
    } catch (error) {
      console.error("Error adding employee:", error.message);
      // Navigate to "/employees" with an error message
      navigate("/employees", {
        state: { errorMessage: "Failed to add employee." },
      });
    }
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Position:
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        {/* Add more input fields for additional information */}
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployee;
