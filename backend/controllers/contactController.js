const Contact = require('../models/contactModel');
const ErrorResponse = require('../utils/errorResponse');

// @desc    Create new contact
// @route   POST /api/contact
// @access  Public
exports.createContact = async (req, res, next) => {
  try {
    const contact = await Contact.create(req.body);
    
    res.status(201).json({
      success: true,
      data: contact
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Get all contacts
// @route   GET /api/contact
// @access  Private/Admin
exports.getContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Update contact status
// @route   PUT /api/contact/:id
// @access  Private/Admin
exports.updateContactStatus = async (req, res, next) => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      {
        new: true,
        runValidators: true
      }
    );

    if (!contact) {
      return next(
        new ErrorResponse(`Contact not found with id of ${req.params.id}`, 404)
      );
    }

    res.status(200).json({ success: true, data: contact });
  } catch (err) {
    next(err);
  }
};

// @desc    Delete contact
// @route   DELETE /api/contact/:id
// @access  Private/Admin
exports.deleteContact = async (req, res, next) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return next(
        new ErrorResponse(`Contact not found with id of ${req.params.id}`, 404)
      );
    }

    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    next(err);
  }
};
