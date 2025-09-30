import React, { useEffect, useState } from "react";
import { getPanelFormBrands, getpanelSubCategory } from '../../../api/formApi'

const AddProductModal = ({ isOpen, onClose, onSave, getFormData }) => {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    category: "",
    description: "",
    howtoUse: "",
    ingredients: "",
    countryInfo: "",
    manufactureInfo: "",
    fssaiNumber: "",
    importerInfo: "",
    images: [],
    isPromoted: false,
    isTested: false,
  });

  const [getpanelBrands, setGetpanelbrands] = useState([])
  const [getpanelCategory, setPanelCategory] = useState([])


  // Generic input/checkbox handler
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Multiple image upload + base64 preview
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...files], // store File objects
    }));
  };

  // Preview (use URL.createObjectURL for files)
  {
    formData.images.length > 0 && (
      <div className="mt-3 grid grid-cols-3 gap-4">
        {formData.images.map((img, idx) => (
          <div key={idx} className="relative group">
            <img
              src={img instanceof File ? URL.createObjectURL(img) : img}
              alt={`preview-${idx}`}
              className="w-full h-28 object-contain border rounded-lg shadow-sm bg-gray-50"
            />
            <button
              type="button"
              onClick={() => handleRemoveImage(idx)}
              className="absolute top-1 right-1 bg-red-500 text-white text-xs px-2 py-1 rounded opacity-80 group-hover:opacity-100"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    )
  }

  // Remove selected image
  const handleRemoveImage = (index) => {
    setFormData((prev) => {
      const updated = [...prev.images];
      updated.splice(index, 1);
      return { ...prev, images: updated };
    });
  };

  // Submit
 const handleSubmit = (e) => {
  e.preventDefault();

  const data = new FormData();
  Object.entries(formData).forEach(([key, value]) => {
    if (key === "images") {
      value.forEach((file) => data.append("images", file)); // multiple files
    } else {
      data.append(key, value);
    }
  });

  // Debug
  for (let [key, value] of data.entries()) {
    console.log(key, value);
  }

  onSave(data);
  
};

  useEffect(() => {
    fetchformData()
  }, [])
  const fetchformData = async () => {
    try {
      const res = await getPanelFormBrands()
      const resdata = await getpanelSubCategory()
      setGetpanelbrands(res.data.data)

      setPanelCategory(resdata.data.data)

    } catch (err) {
      console.log(err)
    }
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl p-6 overflow-y-auto max-h-[90vh]">
        <h2 className="text-xl font-semibold mb-4">Add Product</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium">Product Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Brand & Category */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Brand *</label>
              <select
                className="mt-1 w-full border rounded-lg p-2"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                required
              >
                <option value="">Select brand</option>
                {getpanelBrands.map((b) => (
                  <option key={b._id} value={b._id}>{b.name}</option>
                ))}
              </select>

            </div>
            <div>
              <label className="block text-sm font-medium">Category *</label>
              <select
                className="mt-1 w-full border rounded-lg p-2"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">Select category</option>
                {getpanelCategory.map((c) => (
                  <option key={c._id} value={c._id}>{c.name}</option>
                ))}
              </select>


            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium">Description</label>
            <textarea
              name="description"
              rows="2"
              value={formData.description}
              onChange={handleChange}
              className="mt-1 w-full border rounded-lg p-2"
            />
          </div>

          {/* How to Use */}
          <div>
            <label className="block text-sm font-medium">How to Use</label>
            <textarea
              name="howtoUse"
              rows="2"
              value={formData.howtoUse}
              onChange={handleChange}
              className="mt-1 w-full border rounded-lg p-2"
            />
          </div>

          {/* Ingredients */}
          <div>
            <label className="block text-sm font-medium">Ingredients</label>
            <textarea
              name="ingredients"
              rows="2"
              value={formData.ingredients}
              onChange={handleChange}
              className="mt-1 w-full border rounded-lg p-2"
            />
          </div>

          {/* Country & Manufacture */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Country Info</label>
              <input
                type="text"
                name="countryInfo"
                value={formData.countryInfo}
                onChange={handleChange}
                className="mt-1 w-full border rounded-lg p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                Manufacture Info
              </label>
              <input
                type="text"
                name="manufactureInfo"
                value={formData.manufactureInfo}
                onChange={handleChange}
                className="mt-1 w-full border rounded-lg p-2"
              />
            </div>
          </div>

          {/* FSSAI & Importer */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">FSSAI Number</label>
              <input
                type="text"
                name="fssaiNumber"
                value={formData.fssaiNumber}
                onChange={handleChange}
                className="mt-1 w-full border rounded-lg p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Importer Info</label>
              <input
                type="text"
                name="importerInfo"
                value={formData.importerInfo}
                onChange={handleChange}
                className="mt-1 w-full border rounded-lg p-2"
              />
            </div>
          </div>

          {/* Multiple Images */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Product Images
            </label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-500 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700"
            />
          </div>

          {/* Image Previews */}
          {formData.images.length > 0 && (
            <div className="mt-3 grid grid-cols-3 gap-4">
              {formData.images.map((img, idx) => (
                <div key={idx} className="relative group">
                  <img
                    src={img}
                    alt={`preview-${idx}`}
                    className="w-full h-28 object-contain border rounded-lg shadow-sm bg-gray-50"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(idx)}
                    className="absolute top-1 right-1 bg-red-500 text-white text-xs px-2 py-1 rounded opacity-80 group-hover:opacity-100"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Checkboxes */}
          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="isPromoted"
                checked={formData.isPromoted}
                onChange={handleChange}
              />
              <span>Promoted</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="isTested"
                checked={formData.isTested}
                onChange={handleChange}
              />
              <span>Tested</span>
            </label>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-4 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductModal;
