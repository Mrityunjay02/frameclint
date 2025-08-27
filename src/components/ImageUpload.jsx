import React, { useState } from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import axios from 'axios';

const ImageUpload = ({ onUploadSuccess, onUploadError, folder = 'frame-digital' }) => {
  const [image, setImage] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [preview, setPreview] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);

  // Initialize Cloudinary
  const cld = new Cloudinary({
    cloud: {
      cloudName: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
    },
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const uploadImage = async () => {
    if (!image) return;

    const formData = new FormData();
    formData.append('image', image);

    try {
      setIsUploading(true);
      const { data } = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setUploadedImage(data.data);
      if (onUploadSuccess) onUploadSuccess(data.data);
    } catch (error) {
      console.error('Upload failed:', error);
      if (onUploadError) onUploadError(error);
    } finally {
      setIsUploading(false);
    }
  };

  const removeImage = () => {
    setImage(null);
    setPreview(null);
    setUploadedImage(null);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">
        <label className="w-full sm:w-1/2 md:w-auto flex-shrink-0 cursor-pointer bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors text-center text-sm sm:text-base">
          Choose Image
          <input
            type="file"
            className="hidden"
            onChange={handleImageChange}
            accept="image/*"
          />
        </label>
        
        {image && (
          <button
            onClick={uploadImage}
            disabled={isUploading}
            className={`w-full sm:w-auto flex-1 px-6 py-2.5 rounded-lg text-sm sm:text-base ${
              isUploading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-green-600 hover:bg-green-700 text-white'
            }`}
          >
            {isUploading ? 'Uploading...' : 'Upload'}
          </button>
        )}
      </div>

      {preview && (
        <div className="mt-4">
          <h4 className="text-sm font-medium mb-2">Preview:</h4>
          <div className="relative w-full max-w-2xl mx-auto">
            <img
              src={preview}
              alt="Preview"
              className="w-full h-auto max-h-64 sm:max-h-80 object-contain rounded-lg border-2 border-gray-200 shadow-sm"
            />
            <button
              onClick={removeImage}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
              title="Remove image"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {uploadedImage && (
        <div className="mt-4 p-4 bg-green-50 rounded border border-green-200">
          <h4 className="text-sm font-medium text-green-800 mb-2">Uploaded Image:</h4>
          <div className="space-y-2">
            <AdvancedImage
              cldImg={cld.image(uploadedImage.public_id)}
              className="w-full h-auto max-h-64 sm:max-h-80 object-contain rounded-lg border-2 border-gray-200 shadow-sm"
            />
            <p className="text-xs text-gray-600 break-all">
              URL: {uploadedImage.url}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
