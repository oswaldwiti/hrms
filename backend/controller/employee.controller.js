const EmpModel = require("../models/employee.model");

exports.getAllEmployee = (req, res) => {
  EmpModel.find({})
    .then((emps) => res.json(emps))
    .catch((err) => res.json(err));
};

exports.getEmployeeById = (req, res) => {
  const id = req.params.id;
  EmpModel.findById({ _id: id })
    .then((emps) => res.json(emps))
    .catch((err) => res.json(err));
};

exports.createEmployee = (req, res) => {
  EmpModel.create(req.body)
    .then((emps) => res.json(emps))
    .catch((err) => res.json(err));
};

exports.updateEmployee = (req, res) => {
  const id = req.params.id;
  console.log("update emp", id);
  EmpModel.findByIdAndUpdate(
    { _id: id },
    {
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
    }
  )
    .then((emps) => res.json(emps))
    .catch((err) => res.json(err));
};

exports.deleteEmployee = (req, res) => {
  const id = req.params.id;
  console.log("delete--->", id);
  EmpModel.findByIdAndDelete(id)
    .then((res) => res.json(res))
    .catch((err) => res.json(err));
};
