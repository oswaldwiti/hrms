const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: String,
  repassword: String,
});

const UserModel = new mongoose.model("UserModel", userSchema);
module.exports = UserModel