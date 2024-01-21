const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.get("/", controller.getEmployees);

router.get("/:id", controller.getEmployeeById);

router.put("/:id", controller.updateEmployee);

module.exports = router;
