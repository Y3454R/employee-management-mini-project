// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import EmployeeList from "./pages/EmployeeList";
import EmployeeProfile from "./pages/EmployeeProfile";
import EditEmployee from "./pages/EditEmployee";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<EmployeeList />} />
        <Route path="/employee/:id" element={<EmployeeProfile />} />
        <Route path="/:id/edit" element={<EditEmployee />} />
        {/* <Route path="/edit/:id" element={EditEmployee} />{" "} */}
        {/* New route for editing */}
      </Routes>
    </Router>
  );
};

export default App;

/*
const employeeId = 1; // Replace with the actual employee ID
  return <EmployeeProfile employeeId={employeeId} />;
*/
