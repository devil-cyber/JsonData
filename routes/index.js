const express = require('express');
const router = express.Router();
const HomeController = require('../api_controllers/home_controller');

router.get('/', HomeController.home);









module.exports = router;