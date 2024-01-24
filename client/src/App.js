import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import EmployeeList from "./pages/EmployeeList";
import EmployeeProfile from "./pages/EmployeeProfile";
import EditEmployee from "./pages/EditEmployee";
import AddEmployee from "./pages/AddEmployee";
import LoginForm from "./pages/LoginForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/employees" element={<EmployeeList />} />
        <Route path="/employee/:id" element={<EmployeeProfile />} />
        <Route path="/:id/edit" element={<EditEmployee />} />
        <Route path="/employees/add" element={<AddEmployee />} />
      </Routes>
    </Router>
  );
};

export default App;
