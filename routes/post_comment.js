const express = require('express');
const router = express.Router();
const postCommentController = require('../api_controllers/post_comment_controller');


router.get('/comment', postCommentController.post_comment);

module.exports = router;