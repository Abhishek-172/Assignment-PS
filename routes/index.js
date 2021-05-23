//Requiring a Express Module
const express = require('express');

//Using Router() Functionality from Express Module
const router = express.Router();

//Specifying a Path for the Controller which will handle the HTML Page rendering logic
const homeController = require('../controllers/home_controller.js');

//On recieving '/' Path call a function inside the homeController.js named home
router.get('/', homeController.home);

//Export
module.exports = router;