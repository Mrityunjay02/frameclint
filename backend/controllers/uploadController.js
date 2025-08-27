const cloudinary = require('../config/cloudinary');
const asyncHandler = require('express-async-handler');

// @desc    Upload image to Cloudinary
// @route   POST /api/upload
// @access  Private/Admin
const uploadImage = asyncHandler(async (req, res) => {
  try {
    console.log('Upload request received. Files:', req.file);
    
    if (!req.file) {
      res.status(400);
      throw new Error('No file uploaded. Please upload a file');
    }

    console.log('File to upload:', {
      originalname: req.file.originalname,
      path: req.file.path,
      size: req.file.size,
      mimetype: req.file.mimetype
    });

    // Upload image to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'frame-digital',
      resource_type: 'auto',
    });

    // Clean up the uploaded file from the server
    const fs = require('fs');
    if (fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }

    res.status(200).json({
      success: true,
      message: 'Image uploaded successfully',
      data: {
        url: result.secure_url,
        public_id: result.public_id,
        format: result.format,
        bytes: result.bytes,
        width: result.width,
        height: result.height
      },
    });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Server error',
    });
  }
});

// @desc    Delete image from Cloudinary
// @route   DELETE /api/upload/:public_id
// @access  Private/Admin
const deleteImage = asyncHandler(async (req, res) => {
  try {
    const { public_id } = req.params;
    
    if (!public_id) {
      res.status(400);
      throw new Error('No public ID provided');
    }

    // Delete image from Cloudinary
    await cloudinary.uploader.destroy(public_id);
    
    res.status(200).json({
      success: true,
      message: 'Image deleted successfully',
    });
  } catch (error) {
    console.error('Delete error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Server error',
    });
  }
});

module.exports = {
  uploadImage,
  deleteImage,
};
