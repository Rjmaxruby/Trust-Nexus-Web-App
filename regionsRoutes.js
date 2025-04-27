const express = require('express');
const router = express.Router();
const { getAllRegions } = require('../controllers/RegionsController');

router.get('/', getAllRegions);

module.exports = router;
