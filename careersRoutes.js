const express = require('express');
const router = express.Router();
const { getAllCareers } = require('../controllers/CareersController');

router.get('/', getAllCareers);

module.exports = router;
