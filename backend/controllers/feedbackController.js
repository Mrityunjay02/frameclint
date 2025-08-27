const Feedback = require('../models/feedbackModel');
const ErrorResponse = require('../utils/errorResponse');

// @desc    Create new feedback
// @route   POST /api/feedback
// @access  Public
exports.createFeedback = async (req, res, next) => {
  try {
    const feedback = await Feedback.create(req.body);
    
    res.status(201).json({
      success: true,
      data: feedback
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Get all feedback (approved only for public, all for admin)
// @route   GET /api/feedback
// @access  Public/Private (Admin)
exports.getFeedback = async (req, res, next) => {
  try {
    let query;
    
    // If user is not admin, only return approved feedback
    if (req.user && req.user.role === 'admin') {
      query = Feedback.find();
    } else {
      query = Feedback.find({ isApproved: true });
    }
    
    const feedback = await query.sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      count: feedback.length,
      data: feedback
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Update feedback approval status
// @route   PUT /api/feedback/:id/approve
// @access  Private/Admin
exports.approveFeedback = async (req, res, next) => {
  try {
    const feedback = await Feedback.findByIdAndUpdate(
      req.params.id,
      { isApproved: req.body.isApproved },
      {
        new: true,
        runValidators: true
      }
    );

    if (!feedback) {
      return next(
        new ErrorResponse(`Feedback not found with id of ${req.params.id}`, 404)
      );
    }

    res.status(200).json({ success: true, data: feedback });
  } catch (err) {
    next(err);
  }
};

// @desc    Delete feedback
// @route   DELETE /api/feedback/:id
// @access  Private/Admin
exports.deleteFeedback = async (req, res, next) => {
  try {
    const feedback = await Feedback.findByIdAndDelete(req.params.id);

    if (!feedback) {
      return next(
        new ErrorResponse(`Feedback not found with id of ${req.params.id}`, 404)
      );
    }

    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    next(err);
  }
};
