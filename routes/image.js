const express = require('express');
const router = express.Router();
const ImageController = require('../api_controllers/image_controller');


router.get('/:value', ImageController.image);

module.exports = router;