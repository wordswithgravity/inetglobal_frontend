const Blog = require('../models/Blog');
const blogTranslationService = require('../services/blogTranslationService');
const { publishDueScheduledBlogs } = require('../services/blogScheduler');

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
    // Check and publish any due scheduled blogs on-the-fly
    await publishDueScheduledBlogs();

    const { category, search, tag, limit, page, lang } = req.query;
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
    const rawBlogs = await Blog.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limitNum);

    // If target language is requested and not English, translate blog listings
    let blogs = rawBlogs;
    if (lang && lang !== 'en') {
      try {
        blogs = await blogTranslationService.translateBlogList(rawBlogs, lang, 'en');
      } catch (transErr) {
        console.warn('[getPublishedBlogs] Translation failed, returning original:', transErr.message);
      }
    }

    return res.status(200).json({
      success: true,
      count: blogs.length,
      total,
      page: pageNum,
      pages: Math.ceil(total / limitNum),
      blogs,
      language: lang || 'en',
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
    // Check and publish any due scheduled blogs on-the-fly
    await publishDueScheduledBlogs();

    const { identifier } = req.params;
    const { lang } = req.query;
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

    // Increment views without modifying updatedAt timestamp
    await Blog.updateOne({ _id: blog._id }, { $inc: { views: 1 } }, { timestamps: false });
    blog.views = (blog.views || 0) + 1;

    // If target language is requested and not English, translate full blog
    let outputBlog = blog;
    if (lang && lang !== 'en') {
      try {
        outputBlog = await blogTranslationService.translateBlogDocument(blog, lang, 'en');
      } catch (transErr) {
        console.warn(`[getBlogBySlugOrId] Translation to ${lang} failed, returning original:`, transErr.message);
      }
    }

    return res.status(200).json({
      success: true,
      blog: outputBlog,
      language: lang || 'en',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve blog',
      error: error.message,
    });
  }
};

// @desc    Get all blogs for Admin (Drafts + Published + Scheduled)
// @route   GET /api/admin/blogs
// @access  Private (Admin)
const adminGetAllBlogs = async (req, res) => {
  try {
    // Check and publish any due scheduled blogs
    await publishDueScheduledBlogs();

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
      scheduledAt,
      tags,
      sections,
      relatedSlugs,
    } = req.body;

    const isDraft = status === 'draft';
    const isScheduled = status === 'scheduled';
    const effectiveTitle = title?.trim() || (isDraft ? `Draft Article (${new Date().toLocaleDateString()})` : '');
    const effectiveExcerpt = excerpt?.trim() || (isDraft ? 'Draft article in progress...' : '');
    const effectiveImageUrl =
      imageUrl?.trim() ||
      (isDraft
        ? 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80'
        : '');

    if (!effectiveTitle || !effectiveExcerpt || !effectiveImageUrl) {
      return res.status(400).json({
        success: false,
        message: 'Title, excerpt, and image URL are required to publish or schedule an article',
      });
    }

    if (isScheduled && !scheduledAt) {
      return res.status(400).json({
        success: false,
        message: 'A future date and time are required to schedule an article',
      });
    }

    const finalSlug = slug
      ? await generateUniqueSlug(slug)
      : await generateUniqueSlug(effectiveTitle);

    const sanitizedSections = Array.isArray(sections)
      ? sections.map((sec, idx) => ({
          ...sec,
          heading: sec.heading?.trim() || `Section ${idx + 1}`,
        }))
      : [];

    const blog = await Blog.create({
      title: effectiveTitle,
      slug: finalSlug,
      excerpt: effectiveExcerpt,
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
      imageUrl: effectiveImageUrl,
      featured: Boolean(featured),
      status: status || (isDraft ? 'draft' : 'published'),
      scheduledAt: isScheduled && scheduledAt ? new Date(scheduledAt) : null,
      tags: Array.isArray(tags) ? tags : [],
      sections: sanitizedSections,
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

    const isDraft = req.body.status === 'draft' || blog.status === 'draft';
    if (isDraft) {
      if (req.body.title !== undefined && !req.body.title?.trim()) {
        req.body.title = blog.title || `Draft Article (${new Date().toLocaleDateString()})`;
      }
      if (req.body.excerpt !== undefined && !req.body.excerpt?.trim()) {
        req.body.excerpt = blog.excerpt || 'Draft article in progress...';
      }
      if (req.body.imageUrl !== undefined && !req.body.imageUrl?.trim()) {
        req.body.imageUrl = blog.imageUrl || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80';
      }
    }

    if (Array.isArray(req.body.sections)) {
      req.body.sections = req.body.sections.map((sec, idx) => ({
        ...sec,
        heading: sec.heading?.trim() || `Section ${idx + 1}`,
      }));
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

    // Invalidate translation cache for this blog
    await blogTranslationService.invalidateBlogTranslations(id);

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

    // Invalidate translation cache for this blog
    await blogTranslationService.invalidateBlogTranslations(id);

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
