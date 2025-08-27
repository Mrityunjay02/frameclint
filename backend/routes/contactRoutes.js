const express = require('express');
const { check } = require('express-validator');
const {
  createContact,
  getContacts,
  updateContactStatus,
  deleteContact,
} = require('../controllers/contactController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// @desc    Create new contact
// @route   POST /api/contact
// @access  Public
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('message', 'Message is required').not().isEmpty(),
  ],
  createContact
);

// @desc    Get all contacts
// @route   GET /api/contact
// @access  Private/Admin
router.get('/', protect, authorize('admin'), getContacts);

// @desc    Update contact status
// @route   PUT /api/contact/:id
// @access  Private/Admin
router.put(
  '/:id',
  protect,
  authorize('admin'),
  [check('status', 'Status is required').not().isEmpty()],
  updateContactStatus
);

// @desc    Delete contact
// @route   DELETE /api/contact/:id
// @access  Private/Admin
router.delete('/:id', protect, authorize('admin'), deleteContact);

module.exports = router;
