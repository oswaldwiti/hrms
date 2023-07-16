const mongoose = require("mongoose");

const EmpSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const EmpModel = mongoose.model("EmpModel", EmpSchema);
module.exports = EmpModel;
