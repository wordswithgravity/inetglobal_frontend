const Subscriber = require('../models/Subscriber');

// @desc    Subscribe an email to newsletter
// @route   POST /api/newsletter/subscribe
// @access  Public
const subscribeNewsletter = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email || !email.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address',
      });
    }

    const cleanEmail = email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email address format',
      });
    }

    let existing = await Subscriber.findOne({ email: cleanEmail });
    if (existing) {
      if (existing.status === 'unsubscribed') {
        existing.status = 'active';
        await existing.save();
        return res.status(200).json({
          success: true,
          message: 'Welcome back! Your subscription has been reactivated.',
          subscriber: existing,
        });
      }
      return res.status(200).json({
        success: true,
        message: 'You are already subscribed to our newsletter!',
        subscriber: existing,
      });
    }

    const subscriber = await Subscriber.create({
      email: cleanEmail,
      status: 'active',
    });

    return res.status(201).json({
      success: true,
      message: 'Thank you for subscribing!',
      subscriber,
    });
  } catch (error) {
    console.error('Error in subscribeNewsletter:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to subscribe',
      error: error.message,
    });
  }
};

// @desc    Get all subscribers (Admin)
// @route   GET /api/admin/subscribers
// @access  Private (protectAdmin)
const getAllSubscribers = async (req, res) => {
  try {
    const subscribers = await Subscriber.find().sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      count: subscribers.length,
      subscribers,
    });
  } catch (error) {
    console.error('Error fetching subscribers:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch subscribers',
      error: error.message,
    });
  }
};

// @desc    Update subscriber status (Admin)
// @route   PUT /api/admin/subscribers/:id/status
// @access  Private (protectAdmin)
const updateSubscriberStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!['active', 'unsubscribed'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid status',
      });
    }

    const subscriber = await Subscriber.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!subscriber) {
      return res.status(404).json({
        success: false,
        message: 'Subscriber not found',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Subscriber updated',
      subscriber,
    });
  } catch (error) {
    console.error('Error updating subscriber:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to update subscriber',
      error: error.message,
    });
  }
};

// @desc    Delete subscriber (Admin)
// @route   DELETE /api/admin/subscribers/:id
// @access  Private (protectAdmin)
const deleteSubscriber = async (req, res) => {
  try {
    const { id } = req.params;
    const subscriber = await Subscriber.findByIdAndDelete(id);

    if (!subscriber) {
      return res.status(404).json({
        success: false,
        message: 'Subscriber not found',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Subscriber deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting subscriber:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to delete subscriber',
      error: error.message,
    });
  }
};

module.exports = {
  subscribeNewsletter,
  getAllSubscribers,
  updateSubscriberStatus,
  deleteSubscriber,
};
