const express = require('express')
const Router = express.Router();
const authcontroller = require('../Controllers/authController')
const authMiddleware = require('../Middleware/authMiddleware')

Router.route('/signin')
      .post(authMiddleware.isLoggedIn_Dont_Let_Pass,authcontroller.signin);

Router.route('/logout')
      .get(authcontroller.logout);     

// Router.route('/singnup')
//       .get();      
      

module.exports = Router;