// import React, { useEffect, useState } from "react";
import EmployeeList from "./EmployeeList";

function App() {
  // const [backendData, setBackendData] = useState([{}]);

  // useEffect(() => {
  //   fetch("api/")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setBackendData(data);
  //     });
  // }, []);
  // console.log(backendData);
  return (
    <div>
      <EmployeeList />
    </div>
  );
}

export default App;
