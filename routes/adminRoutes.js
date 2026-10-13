const express = require('express');
const router = express.Router();
const {
  loginAdmin,
  getAdminMe,
  registerAdmin,
  changePassword,
} = require('../controllers/adminAuthController');
const {
  adminGetAllBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
  uploadImageToCloudinary,
} = require('../controllers/blogController');
const {
  getAllInquiries,
  updateInquiryStatus,
  deleteInquiry,
} = require('../controllers/inquiryController');
const {
  getAllSubscribers,
  updateSubscriberStatus,
  deleteSubscriber,
} = require('../controllers/newsletterController');
const {
  getSocialLinks,
  updateSocialLinks,
} = require('../controllers/socialLinksController');
const { protectAdmin } = require('../middleware/authMiddleware');
const { uploadBlogImage } = require('../middleware/blogUpload');

// Public route: Admin Login
router.post('/login', loginAdmin);

// Protected Auth Routes
router.get('/me', protectAdmin, getAdminMe);
router.post('/register', protectAdmin, registerAdmin);
router.put('/change-password', protectAdmin, changePassword);

// Admin Blog CRUD Routes (Protected)
router.get('/blogs', protectAdmin, adminGetAllBlogs);
router.post('/blogs', protectAdmin, createBlog);
router.put('/blogs/:id', protectAdmin, updateBlog);
router.delete('/blogs/:id', protectAdmin, deleteBlog);

// Admin Inquiries Routes (Protected)
router.get('/inquiries', protectAdmin, getAllInquiries);
router.put('/inquiries/:id/status', protectAdmin, updateInquiryStatus);
router.delete('/inquiries/:id', protectAdmin, deleteInquiry);

// Admin Subscribers Routes (Protected)
router.get('/subscribers', protectAdmin, getAllSubscribers);
router.put('/subscribers/:id/status', protectAdmin, updateSubscriberStatus);
router.delete('/subscribers/:id', protectAdmin, deleteSubscriber);

// Admin Social Links Routes (Protected)
router.get('/social-links', protectAdmin, getSocialLinks);
router.put('/social-links', protectAdmin, updateSocialLinks);

// Cloudinary Image Upload Endpoint (Protected)
router.post(
  '/upload-image',
  protectAdmin,
  uploadBlogImage.single('image'),
  uploadImageToCloudinary
);

module.exports = router;
