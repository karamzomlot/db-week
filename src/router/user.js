const express = require('express');
const { signupController } = require('../controller');

const userRouter = express.Router();

userRouter.post('/signup', signupController); // /api/v1/users/signup

module.exports = userRouter;