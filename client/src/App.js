// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import EmployeeList from "./EmployeeList";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<EmployeeList />} />
      </Routes>
    </Router>
  );
};

export default App;

// import React, { useEffect, useState } from "react";
// import EmployeeList from "./EmployeeList";

// function App() {
//   return (
//     <div>
//       <EmployeeList />
//     </div>
//   );
// }

// export default App;
