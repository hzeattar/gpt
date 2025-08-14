const express = require('express');
const router = express.Router();
const supplierController = require('../controllers/supplierController');

router.get('/dashboard', supplierController.dashboard);

module.exports = router;
