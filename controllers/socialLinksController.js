const SocialLinks = require('../models/SocialLinks');

// Default initial links if none exist
const DEFAULT_KEY = 'global_social_links';

// @desc    Get social links (Public)
// @route   GET /api/social-links
// @access  Public
const getSocialLinks = async (req, res) => {
  try {
    let links = await SocialLinks.findOne({ key: DEFAULT_KEY });
    if (!links) {
      links = await SocialLinks.create({
        key: DEFAULT_KEY,
        facebook: '',
        twitter: '',
        youtube: '',
        linkedin: '',
        instagram: '',
        github: '',
      });
    }

    return res.status(200).json({
      success: true,
      socialLinks: {
        facebook: links.facebook || '',
        twitter: links.twitter || '',
        youtube: links.youtube || '',
        linkedin: links.linkedin || '',
        instagram: links.instagram || '',
        github: links.github || '',
      },
    });
  } catch (error) {
    console.error('Error fetching social links:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch social links',
      error: error.message,
    });
  }
};

// @desc    Update social links (Admin)
// @route   PUT /api/admin/social-links
// @access  Private (protectAdmin)
const updateSocialLinks = async (req, res) => {
  try {
    const { facebook, twitter, youtube, linkedin, instagram, github } = req.body;

    let links = await SocialLinks.findOne({ key: DEFAULT_KEY });
    if (!links) {
      links = new SocialLinks({ key: DEFAULT_KEY });
    }

    if (facebook !== undefined) links.facebook = facebook.trim();
    if (twitter !== undefined) links.twitter = twitter.trim();
    if (youtube !== undefined) links.youtube = youtube.trim();
    if (linkedin !== undefined) links.linkedin = linkedin.trim();
    if (instagram !== undefined) links.instagram = instagram.trim();
    if (github !== undefined) links.github = github.trim();

    await links.save();

    return res.status(200).json({
      success: true,
      message: 'Social links updated successfully',
      socialLinks: {
        facebook: links.facebook || '',
        twitter: links.twitter || '',
        youtube: links.youtube || '',
        linkedin: links.linkedin || '',
        instagram: links.instagram || '',
        github: links.github || '',
      },
    });
  } catch (error) {
    console.error('Error updating social links:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to update social links',
      error: error.message,
    });
  }
};

module.exports = {
  getSocialLinks,
  updateSocialLinks,
};
