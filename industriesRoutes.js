const express = require('express');
const router = express.Router();
const { getAllIndustries } = require('../controllers/IndustriesController');

router.get('/', getAllIndustries);

module.exports = router;
