const express = require('express');
const router = express.Router();
const { getAllContent, getContentByType } = require('../controllers/ContentController');

router.get('/', getAllContent);
router.get('/:type', getContentByType);

module.exports = router;
