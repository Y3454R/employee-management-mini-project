const { Router } = require("express");
const controller = require("./controller");
const authenticateToken = require("../authenticate/authenticateToken");

const router = Router();

router.get("/", authenticateToken, controller.getEmployees);

router.get("/:id", authenticateToken, controller.getEmployeeById);

router.post("/", authenticateToken, controller.addEmployee);

router.put("/:id", authenticateToken, controller.updateEmployee);

router.delete("/:id", authenticateToken, controller.removeEmployee);

module.exports = router;
