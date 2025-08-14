const express = require('express');
const router = express.Router();
const marketerController = require('../controllers/marketerController');

router.get('/dashboard', marketerController.dashboard);

module.exports = router;
