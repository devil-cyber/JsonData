const express = require('express');
const router = express.Router();
const UserController = require('../api_controllers/user_controller');

router.get('/:value', UserController.user);


module.exports = router;