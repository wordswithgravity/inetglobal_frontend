const express = require('express');
const router = express.Router();
const {
  getPublishedBlogs,
  getBlogBySlugOrId,
} = require('../controllers/blogController');

// Public endpoints
router.get('/', getPublishedBlogs);
router.get('/:identifier', getBlogBySlugOrId);

module.exports = router;
