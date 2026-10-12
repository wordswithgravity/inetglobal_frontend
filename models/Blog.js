const mongoose = require('mongoose');

// Sub-schema for table row and columns
const tableDataSchema = new mongoose.Schema(
  {
    headers: [{ type: String, trim: true }],
    rows: [[{ type: String, trim: true }]],
  },
  { _id: false }
);

// Sub-schema for embedded graphs
const graphDataSchema = new mongoose.Schema(
  {
    title: { type: String, trim: true },
    type: {
      type: String,
      enum: ['bar', 'line', 'pie', 'stats'],
      default: 'bar',
    },
    data: [
      {
        label: { type: String, trim: true },
        value: { type: Number, default: 0 },
        color: { type: String, default: '#83184d' },
      },
    ],
  },
  { _id: false }
);

// Sub-schema for links inside section
const linkItemSchema = new mongoose.Schema(
  {
    text: { type: String, trim: true },
    url: { type: String, trim: true },
    isExternal: { type: Boolean, default: false },
  },
  { _id: false }
);

// Sub-schema for Section Block
const sectionSchema = new mongoose.Schema(
  {
    heading: {
      type: String,
      required: true,
      trim: true,
    },
    contentHtml: {
      type: String, // Rich text content from toolbar
      default: '',
    },
    paragraphs: [
      {
        type: String,
        trim: true,
      },
    ],
    contentPoints: [
      {
        type: String,
        trim: true,
      },
    ],
    quote: {
      type: String,
      trim: true,
      default: '',
    },
    sectionImage: {
      url: { type: String, default: '' },
      caption: { type: String, default: '' },
      alt: { type: String, default: '' },
    },
    tableData: tableDataSchema,
    graphData: graphDataSchema,
    links: [linkItemSchema],
    keyTakeaways: [
      {
        type: String,
        trim: true,
      },
    ],
  },
  { _id: true }
);

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Blog title is required'],
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    excerpt: {
      type: String,
      required: [true, 'Excerpt is required'],
      trim: true,
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      trim: true,
      default: 'Telecom & CPaaS',
    },
    readTime: {
      type: String,
      default: '5 min read',
    },
    date: {
      type: String,
      default: () =>
        new Date().toLocaleDateString('en-US', {
          month: 'long',
          day: '2-digit',
          year: 'numeric',
        }),
    },
    author: {
      type: String,
      default: 'iNet Global Team',
      trim: true,
    },
    authorRole: {
      type: String,
      default: 'Telecom Insights',
      trim: true,
    },
    authorBio: {
      type: String,
      default: 'Telecom and messaging network engineering team at iNet Global.',
      trim: true,
    },
    imageUrl: {
      type: String,
      required: [true, 'Featured image URL is required'],
    },
    featured: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ['draft', 'published'],
      default: 'published',
    },
    tags: [
      {
        type: String,
        trim: true,
      },
    ],
    sections: [sectionSchema],
    relatedSlugs: [
      {
        type: String,
        trim: true,
      },
    ],
    views: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Slug auto-generation helper
blogSchema.pre('validate', function (next) {
  if (this.title && (!this.slug || this.isModified('title'))) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/--+/g, '-')
      .trim();
  }
  next();
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
