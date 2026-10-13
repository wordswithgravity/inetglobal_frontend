const express = require('express');
const router = express.Router();
const { getSocialLinks } = require('../controllers/socialLinksController');

router.get('/', getSocialLinks);

module.exports = router;
