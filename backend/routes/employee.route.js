const express = require("express");
const {
  getAllEmployee,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} = require("../controller/employee.controller");

const employeeRouter = express.Router();

employeeRouter.get("/", getAllEmployee);
employeeRouter.get("/getEmp/:id", getEmployeeById);
employeeRouter.post("/createEmp", createEmployee);
employeeRouter.put("/updateEmp/:id", updateEmployee);
employeeRouter.delete("/deleteEmp/:id", deleteEmployee);

module.exports = employeeRouter;
