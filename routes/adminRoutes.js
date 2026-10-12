const express = require('express');
const router = express.Router();
const {
  loginAdmin,
  getAdminMe,
  registerAdmin,
} = require('../controllers/adminAuthController');
const {
  adminGetAllBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
  uploadImageToCloudinary,
} = require('../controllers/blogController');
const { protectAdmin } = require('../middleware/authMiddleware');
const { uploadBlogImage } = require('../middleware/blogUpload');

// Public route: Admin Login
router.post('/login', loginAdmin);

// Protected Auth Routes
router.get('/me', protectAdmin, getAdminMe);
router.post('/register', protectAdmin, registerAdmin);

// Admin Blog CRUD Routes (Protected)
router.get('/blogs', protectAdmin, adminGetAllBlogs);
router.post('/blogs', protectAdmin, createBlog);
router.put('/blogs/:id', protectAdmin, updateBlog);
router.delete('/blogs/:id', protectAdmin, deleteBlog);

// Cloudinary Image Upload Endpoint (Protected)
router.post(
  '/upload-image',
  protectAdmin,
  uploadBlogImage.single('image'),
  uploadImageToCloudinary
);

module.exports = router;
