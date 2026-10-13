const mongoose = require('mongoose');

const blogTranslationSchema = new mongoose.Schema(
  {
    blogId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Blog',
      required: true,
      index: true,
    },
    language: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      index: true,
    },
    contentVersion: {
      type: String,
      required: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    excerpt: {
      type: String,
      required: true,
      trim: true,
    },
    sections: [
      {
        heading: { type: String, trim: true },
        contentHtml: { type: String, default: '' },
        paragraphs: [{ type: String, trim: true }],
        contentPoints: [{ type: String, trim: true }],
        quote: { type: String, default: '' },
        sectionImage: {
          url: { type: String, default: '' },
          caption: { type: String, default: '' },
          alt: { type: String, default: '' },
        },
        tableData: {
          headers: [{ type: String, trim: true }],
          rows: [[{ type: String, trim: true }]],
        },
        graphData: {
          title: { type: String, default: '' },
          type: { type: String, default: 'bar' },
          data: [
            {
              label: { type: String, default: '' },
              value: { type: Number, default: 0 },
              color: { type: String, default: '#83184d' },
            },
          ],
        },
        links: [
          {
            text: { type: String, trim: true },
            url: { type: String, trim: true },
            isExternal: { type: Boolean, default: false },
          },
        ],
        keyTakeaways: [{ type: String, trim: true }],
      },
    ],
    authorRole: {
      type: String,
      trim: true,
      default: '',
    },
    authorBio: {
      type: String,
      trim: true,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

// Compound index for fast cache retrieval
blogTranslationSchema.index({ blogId: 1, language: 1 }, { unique: true });

const BlogTranslation = mongoose.model('BlogTranslation', blogTranslationSchema);

module.exports = BlogTranslation;
