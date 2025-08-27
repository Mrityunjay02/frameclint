const express = require('express');
const router = express.Router();
const { uploadImage, deleteImage } = require('../controllers/uploadController');
const upload = require('../utils/fileUpload');
const { protect, admin } = require('../middleware/auth');

// @route   POST /api/upload
// @desc    Upload an image
// @access  Private/Admin
router.post('/', protect, admin, upload.single('image'), uploadImage);

// @route   DELETE /api/upload/:public_id
// @desc    Delete an image
// @access  Private/Admin
router.delete('/:public_id', protect, admin, deleteImage);

module.exports = router;
