const express = require('express');
const { check } = require('express-validator');
const {
  createFeedback,
  getFeedback,
  approveFeedback,
  deleteFeedback,
} = require('../controllers/feedbackController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// @desc    Create new feedback
// @route   POST /api/feedback
// @access  Public
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('rating', 'Please provide a rating between 1 and 5').isInt({ min: 1, max: 5 }),
    check('comment', 'Comment is required').not().isEmpty(),
  ],
  createFeedback
);

// @desc    Get all feedback
// @route   GET /api/feedback
// @access  Public (approved only) or Private/Admin (all)
router.get('/', getFeedback);

// @desc    Update feedback approval status
// @route   PUT /api/feedback/:id/approve
// @access  Private/Admin
router.put(
  '/:id/approve',
  protect,
  authorize('admin'),
  [check('isApproved', 'Approval status is required').isBoolean()],
  approveFeedback
);

// @desc    Delete feedback
// @route   DELETE /api/feedback/:id
// @access  Private/Admin
router.delete('/:id', protect, authorize('admin'), deleteFeedback);

module.exports = router;
