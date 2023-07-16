const UserModel = require('../models/user.model')


exports.register = async (req, res) => {
  //   console.log(req.body);
  const { firstName, lastName, email, password, repassword } = req.body;
  const user = await UserModel.findOne({ email: email });
  if (user) {
    res.send({ message: "This email id already Register" });
  } else {
    const user = new UserModel({
      firstName,
      lastName,
      email,
      password,
      repassword,
    });
    user.save();
    res.send({ message: "Successfull Register" });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email: email });

  if (user) {
    if (password == user.password) {
      res.send({ message: "Login SuccessFull", user });
    } else {
      res.send({ message: "Password didn't match" });
    }
  } else {
    res.send({ message: "This email id is not register" });
  }
};
