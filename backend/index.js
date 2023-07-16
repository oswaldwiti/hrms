const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/user.route");
const employeeRouter = require("./routes/employee.route");

const cors = require("cors");

mongoose
  .connect("mongodb://127.0.0.1:27017/loginMern", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection Successfull");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use("/user", userRouter);
app.use('/employee', employeeRouter)


/*============================
        listen
=============================*/
app.listen(8080, () => {
  console.log("Server is runing at port 8080");
});