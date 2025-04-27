const express = require('express');
const router = express.Router();
const { getAllServices } = require('../controllers/ServicesController');

router.get('/', getAllServices);

module.exports = router;
