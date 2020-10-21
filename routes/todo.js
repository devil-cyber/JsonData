const express = require('express');
const router = express.Router();
const TodoController = require('../api_controllers/todo_controller');


router.get('/:value', TodoController.todo);

module.exports = router;