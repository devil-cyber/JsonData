const express = require('express');
const router = express.Router();
const HomeController = require('../api_controllers/home_controller');

router.get('/', HomeController.home);

router.use('/user', require('./user'));
router.use('/post', require('./post'));
router.use('/image', require('./image'));


module.exports = router;