const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../config/cloudinary');

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'inetglobal/blog',
    allowed_formats: ['jpg', 'jpeg', 'png', 'webp', 'svg', 'gif'],
    transformation: [{ quality: 'auto', fetch_format: 'auto' }],
  },
});

const uploadBlogImage = multer({
  storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB max size
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'), false);
    }
  },
});

module.exports = {
  uploadBlogImage,
  cloudinary,
};
