const express = require('express');
const router = express.Router();
const PostController = require('../api_controllers/post_controller');


router.get('/:value', PostController.post);

module.exports = router;