const express = require("express");
const {login, register} = require('../controller/user.controller')


const userRouter = express.Router();

userRouter.post('/login',login)
userRouter.post('/register', register)

module.exports = userRouter;
