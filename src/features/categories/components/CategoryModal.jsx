// CategoryModal.jsx
import React, { useState, useEffect } from "react";

const CategoryModal = ({ mode, initialData, parentCategories, onClose, onSave, loading }) => {
  const [formData, setFormData] = useState({
    name: "",
    parentCategory: "",
    thumbnail: null,
    isActive: true,
    isMain: false,
  });
  const [thumbnailPreview, setThumbnailPreview] = useState(null);

useEffect(() => {
  if (mode === "edit" && initialData) {
    setFormData({
      name: initialData.name || "",
      // if it's populated object -> use _id, else use the string directly
      parentCategory: typeof initialData.parentCategory === "object"
        ? initialData.parentCategory?._id
        : initialData.parentCategory ||null,
      thumbnail: null,
      isActive: initialData.isActive ?? true,
      isMain: initialData.isMain ?? false,
    });
    setThumbnailPreview(initialData.thumbnail);
  }
}, [mode, initialData]);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, logo: file }));
      setThumbnailPreview(URL.createObjectURL(file));
    }
  };

  const handleRemoveLogo = () => {
    setFormData((prev) => ({ ...prev, logo: null }));
    setThumbnailPreview(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl font-bold"
        >
          &times;
        </button>

        <h2 className="text-xl font-semibold mb-4">
          {mode === "edit" ? "Edit Category" : "Add Category"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-md p-2"
              placeholder="Enter category name"
              required
            />
          </div>

          {/* Parent Category */}
          <div>
            <label className="block text-sm font-medium mb-1">Parent Category</label>
            <select
              name="parentCategory"
              value={formData.parentCategory}
              onChange={handleChange}
              className="w-full border rounded-md p-2"
            >
              <option value="">None</option>
              
              {parentCategories.map((pc) => (
                <option key={pc._id} value={pc._id}>
                  {pc.name}
                </option>
              ))}
            </select>
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-sm font-medium mb-1">Thumbnail</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-500 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700"
            />
          </div>

          {thumbnailPreview && (
            <div className="mt-3 flex items-center gap-3">
              <img
                src={thumbnailPreview}
                alt="Preview"
                className="w-20 h-20 object-contain border rounded-lg shadow-sm bg-gray-50"
              />
              <button
                type="button"
                onClick={handleRemoveLogo}
                className="text-red-500 text-sm hover:underline"
              >
                Remove
              </button>
            </div>
          )}

          {/* Checkboxes */}
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="isActive"
                checked={formData.isActive}
                onChange={handleChange}
              />
              <span>Active</span>
            </label>

            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="isMain"
                checked={formData.isMain}
                onChange={handleChange}
              />
              <span>Main Category</span>
            </label>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded-md"
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              disabled={loading}
            >
              {loading && (
              <svg
                className="animate-spin h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4l-3 3 3 3v4a8 8 0 01-8-8z"
                ></path>
              </svg>
            )}
              {loading ? (mode === "edit" ? "Updating..." : "Saving...") : mode === "edit" ? "Update" : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CategoryModal;
