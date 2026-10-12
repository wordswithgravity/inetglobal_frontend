const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cloudinary = require('./config/cloudinary');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const adminRoutes = require('./routes/adminRoutes');
const blogRoutes = require('./routes/blogRoutes');

// Health check / Test Route
app.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: 'iNetGlobal API is running smoothly',
  });
});

// Admin API
app.use('/api/admin', adminRoutes);

// Public Blog API
app.use('/api/blogs', blogRoutes);

// Cloudinary test / info route
app.get('/api/cloudinary-check', async (req, res) => {
  try {
    const pingResponse = await cloudinary.api.ping();
    res.json({
      success: true,
      message: 'Cloudinary connected successfully',
      ping: pingResponse,
      cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Cloudinary connection error',
      error: error.message,
    });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Visit: http://localhost:${PORT}`);
});
