const Inquiry = require('../models/Inquiry');

// @desc    Submit a new contact inquiry (Public)
// @route   POST /api/inquiries
// @access  Public
const createInquiry = async (req, res) => {
  try {
    const {
      fullName,
      email,
      companyName,
      phonePrefix,
      phoneNumber,
      service,
      message,
    } = req.body;

    if (!fullName || !email || !companyName || !phoneNumber) {
      return res.status(400).json({
        success: false,
        message: 'Please provide full name, email, company name, and phone number',
      });
    }

    const inquiry = await Inquiry.create({
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      companyName: companyName.trim(),
      phonePrefix: phonePrefix || '+1',
      phoneNumber: phoneNumber.trim(),
      service: service || 'Voice',
      message: message ? message.trim() : '',
    });

    return res.status(201).json({
      success: true,
      message: 'Inquiry submitted successfully',
      inquiry,
    });
  } catch (error) {
    console.error('Error creating inquiry:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to submit inquiry',
      error: error.message,
    });
  }
};

// @desc    Get all inquiries (Admin protected)
// @route   GET /api/admin/inquiries
// @access  Private (protectAdmin)
const getAllInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      count: inquiries.length,
      inquiries,
    });
  } catch (error) {
    console.error('Error fetching inquiries:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve inquiries',
      error: error.message,
    });
  }
};

// @desc    Update inquiry status (Admin protected)
// @route   PUT /api/admin/inquiries/:id/status
// @access  Private (protectAdmin)
const updateInquiryStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const allowed = ['new', 'contacted', 'in-progress', 'resolved', 'closed'];
    if (!allowed.includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid status value',
      });
    }

    const inquiry = await Inquiry.findByIdAndUpdate(
      id,
      { status },
      { new: true, runValidators: true }
    );

    if (!inquiry) {
      return res.status(404).json({
        success: false,
        message: 'Inquiry not found',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Inquiry status updated',
      inquiry,
    });
  } catch (error) {
    console.error('Error updating inquiry status:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to update inquiry status',
      error: error.message,
    });
  }
};

// @desc    Delete inquiry (Admin protected)
// @route   DELETE /api/admin/inquiries/:id
// @access  Private (protectAdmin)
const deleteInquiry = async (req, res) => {
  try {
    const { id } = req.params;
    const inquiry = await Inquiry.findByIdAndDelete(id);

    if (!inquiry) {
      return res.status(404).json({
        success: false,
        message: 'Inquiry not found',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Inquiry deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting inquiry:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to delete inquiry',
      error: error.message,
    });
  }
};

module.exports = {
  createInquiry,
  getAllInquiries,
  updateInquiryStatus,
  deleteInquiry,
};
