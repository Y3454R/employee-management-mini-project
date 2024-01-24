require("dotenv").config();

const express = require("express");
const employeeRoutes = require("./src/employees/routes");
const loginRoute = require("./src/login/loginRoute");
// const authenticateToken = require("./src/authenticate/authenticateToken");

const app = express();
const port = 5000;

app.use(express.json());

app.use("/api/login", loginRoute);
app.use("/api/v1/employees", employeeRoutes);

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
