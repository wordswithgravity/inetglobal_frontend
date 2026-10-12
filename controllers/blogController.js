const Blog = require('../models/Blog');

// Helper to generate unique slug
const generateUniqueSlug = async (title, currentId = null) => {
  let baseSlug = title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim();

  let slug = baseSlug;
  let counter = 1;

  while (true) {
    const existing = await Blog.findOne({ slug });
    if (!existing || (currentId && existing._id.toString() === currentId.toString())) {
      return slug;
    }
    slug = `${baseSlug}-${counter}`;
    counter++;
  }
};

// @desc    Get all published blogs (Public)
// @route   GET /api/blogs
// @access  Public
const getPublishedBlogs = async (req, res) => {
  try {
    const { category, search, tag, limit, page } = req.query;
    const query = { status: 'published' };

    if (category && category !== 'All') {
      query.category = category;
    }

    if (tag) {
      query.tags = tag;
    }

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { excerpt: { $regex: search, $options: 'i' } },
        { 'sections.heading': { $regex: search, $options: 'i' } },
      ];
    }

    const pageNum = parseInt(page) || 1;
    const limitNum = parseInt(limit) || 20;
    const skip = (pageNum - 1) * limitNum;

    const total = await Blog.countDocuments(query);
    const blogs = await Blog.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limitNum);

    return res.status(200).json({
      success: true,
      count: blogs.length,
      total,
      page: pageNum,
      pages: Math.ceil(total / limitNum),
      blogs,
    });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve blogs',
      error: error.message,
    });
  }
};

// @desc    Get single blog by slug or ID
// @route   GET /api/blogs/:identifier
// @access  Public
const getBlogBySlugOrId = async (req, res) => {
  try {
    const { identifier } = req.params;
    let blog;

    if (identifier.match(/^[0-9a-fA-F]{24}$/)) {
      blog = await Blog.findById(identifier);
    } else {
      blog = await Blog.findOne({ slug: identifier });
    }

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog post not found',
      });
    }

    // Increment views
    blog.views = (blog.views || 0) + 1;
    await blog.save();

    return res.status(200).json({
      success: true,
      blog,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve blog',
      error: error.message,
    });
  }
};

// @desc    Get all blogs for Admin (Drafts + Published)
// @route   GET /api/admin/blogs
// @access  Private (Admin)
const adminGetAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      count: blogs.length,
      blogs,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Create new Blog (Admin)
// @route   POST /api/admin/blogs
// @access  Private (Admin)
const createBlog = async (req, res) => {
  try {
    const {
      title,
      slug,
      excerpt,
      category,
      readTime,
      date,
      author,
      authorRole,
      authorBio,
      imageUrl,
      featured,
      status,
      tags,
      sections,
      relatedSlugs,
    } = req.body;

    if (!title || !excerpt || !imageUrl) {
      return res.status(400).json({
        success: false,
        message: 'Title, excerpt, and image URL are required',
      });
    }

    const finalSlug = slug
      ? await generateUniqueSlug(slug)
      : await generateUniqueSlug(title);

    const blog = await Blog.create({
      title,
      slug: finalSlug,
      excerpt,
      category: category || 'Telecom & CPaaS',
      readTime: readTime || '5 min read',
      date:
        date ||
        new Date().toLocaleDateString('en-US', {
          month: 'long',
          day: '2-digit',
          year: 'numeric',
        }),
      author: author || req.admin?.name || 'iNet Global Team',
      authorRole: authorRole || 'Telecom Strategy',
      authorBio: authorBio || 'Specialist at iNet Global Network Engineering.',
      imageUrl,
      featured: Boolean(featured),
      status: status || 'published',
      tags: Array.isArray(tags) ? tags : [],
      sections: Array.isArray(sections) ? sections : [],
      relatedSlugs: Array.isArray(relatedSlugs) ? relatedSlugs : [],
    });

    return res.status(201).json({
      success: true,
      message: 'Blog post created successfully',
      blog,
    });
  } catch (error) {
    console.error('Error creating blog:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to create blog post',
      error: error.message,
    });
  }
};

// @desc    Update Blog (Admin)
// @route   PUT /api/admin/blogs/:id
// @access  Private (Admin)
const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog post not found',
      });
    }

    // Check slug uniqueness if changed
    if (req.body.title && req.body.title !== blog.title && !req.body.slug) {
      req.body.slug = await generateUniqueSlug(req.body.title, blog._id);
    } else if (req.body.slug && req.body.slug !== blog.slug) {
      req.body.slug = await generateUniqueSlug(req.body.slug, blog._id);
    }

    const updatedBlog = await Blog.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    return res.status(200).json({
      success: true,
      message: 'Blog post updated successfully',
      blog: updatedBlog,
    });
  } catch (error) {
    console.error('Error updating blog:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to update blog post',
      error: error.message,
    });
  }
};

// @desc    Delete Blog (Admin)
// @route   DELETE /api/admin/blogs/:id
// @access  Private (Admin)
const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog post not found',
      });
    }

    await Blog.findByIdAndDelete(id);

    return res.status(200).json({
      success: true,
      message: 'Blog post deleted permanently',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to delete blog post',
      error: error.message,
    });
  }
};

// @desc    Upload image to Cloudinary
// @route   POST /api/admin/upload-image
// @access  Private (Admin)
const uploadImageToCloudinary = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'No image file uploaded',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Image uploaded successfully to Cloudinary',
      url: req.file.path,
      secure_url: req.file.path,
      public_id: req.file.filename,
    });
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    return res.status(500).json({
      success: false,
      message: 'Image upload failed',
      error: error.message,
    });
  }
};

module.exports = {
  getPublishedBlogs,
  getBlogBySlugOrId,
  adminGetAllBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
  uploadImageToCloudinary,
};
