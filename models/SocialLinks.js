const mongoose = require('mongoose');

const socialLinksSchema = new mongoose.Schema(
  {
    key: {
      type: String,
      default: 'global_social_links',
      unique: true,
    },
    facebook: {
      type: String,
      default: '',
      trim: true,
    },
    twitter: { // X
      type: String,
      default: '',
      trim: true,
    },
    youtube: {
      type: String,
      default: '',
      trim: true,
    },
    linkedin: {
      type: String,
      default: '',
      trim: true,
    },
    instagram: {
      type: String,
      default: '',
      trim: true,
    },
    github: {
      type: String,
      default: '',
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('SocialLinks', socialLinksSchema);
