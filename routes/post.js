const express = require('express');
const router = express.Router();
const PostController = require('../api_controllers/post_controller');


router.get('/:value', PostController.post);
router.post('/create', PostController.post_create);
router.use('/one', require('./post_comment'));
module.exports = router;