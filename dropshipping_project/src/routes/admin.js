const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Admin dashboard placeholder
router.get('/dashboard', adminController.dashboard);

module.exports = router;
