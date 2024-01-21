const express = require("express");
const employeeRoutes = require("./src/employees/routes");

const app = express();
const port = 5000;

const bodyParser = require("body-parser");

app.use(bodyParser.json());

// app.get("/api/", (req, res) =>
//   res.json({ users: ["userOne", "userTwo", "userThree"] })
// );

app.use("/api/v1/employees", employeeRoutes);

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
