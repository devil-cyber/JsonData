const express = require('express');
const router = express.Router();
const CommentController = require('../api_controllers/comment_controller');


router.get('/:value', CommentController.comment);

module.exports = router;