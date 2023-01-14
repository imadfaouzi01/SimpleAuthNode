const express = require('express')
const Router = express.Router();
const usercontroller = require('../Controllers/userController')
const authMiddleware = require('../Middleware/authMiddleware')


Router.route('/')
      .get(authMiddleware.isLoggedIn_Let_Pass, usercontroller.getAlluser);

Router.route('/:id')
      .get(authMiddleware.isLoggedIn_Let_Pass, usercontroller.getOneuser);      
      

module.exports = Router;