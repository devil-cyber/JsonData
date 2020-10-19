const express = require('express');
const router = express.Router();
const DataController = require('../api_controllers/data_controllers');

router.get('/data/:value', DataController.data);


module.exports = router;