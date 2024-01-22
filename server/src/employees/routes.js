const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.get("/", controller.getEmployees);

router.get("/:id", controller.getEmployeeById);

router.post("/", controller.addEmployee);

router.put("/:id", controller.updateEmployee);

router.delete("/:id", controller.removeEmployee);

module.exports = router;
