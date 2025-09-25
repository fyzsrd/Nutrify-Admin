
import React, { useState } from "react";
import axios from "axios";

const AddVariantModal = ({ productId, onClose, onVariantAdded }) => {
  const [formData, setFormData] = useState({
    weight: "",
    weightType: "kg",
    flavor: "",
    mrp: "",
    price: "",
    sku: "",
    stock: "",
    isBestSeller: false,
    isDefault: false,
    image: "", // single image
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageChange = (e) => {
    setFormData((prev) => ({ ...prev, image: e.target.value }));
  };

  const removeImage = () => {
    setFormData((prev) => ({ ...prev, image: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = { 
        productId, 
        ...formData, 
        images: formData.image ? [formData.image] : [] 
      };

      const res = await axios.post("/api/variants", payload);

      if (res.data.status) {
        onVariantAdded(res.data.data);
        onClose();
      }
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Error adding variant: " + err.message);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl p-6 overflow-y-auto max-h-[90vh]">
        <h2 className="text-xl font-semibold mb-4">Add Variant</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Weight + WeightType */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium">Weight *</label>
              <input
                name="weight"
                type="number"
                value={formData.weight}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium">Weight Type *</label>
              <select
                name="weightType"
                value={formData.weightType}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
              >
                <option value="kg">Kg</option>
                <option value="g">Gram</option>
                <option value="lbs">Lbs</option>
                <option value="oz">Oz</option>
              </select>
            </div>
          </div>

          {/* Flavor */}
          <div>
            <label className="block text-sm font-medium">Flavor *</label>
            <input
              name="flavor"
              type="text"
              value={formData.flavor}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* MRP & Price */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium">MRP *</label>
              <input
                name="mrp"
                type="number"
                value={formData.mrp}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium">Price *</label>
              <input
                name="price"
                type="number"
                value={formData.price}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          {/* SKU */}
          <div>
            <label className="block text-sm font-medium">SKU *</label>
            <input
              name="sku"
              type="text"
              value={formData.sku}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Stock */}
          <div>
            <label className="block text-sm font-medium">Stock *</label>
            <input
              name="stock"
              type="number"
              value={formData.stock}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Checkboxes */}
          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="isBestSeller"
                checked={formData.isBestSeller}
                onChange={handleChange}
              />
              Best Seller
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="isDefault"
                checked={formData.isDefault}
                onChange={handleChange}
              />
              Default Variant
            </label>
          </div>

          {/* Single Image */}
          <div>
            <label className="block text-sm font-medium">Image *</label>
            {!formData.image ? (
              <input
                type="url"
                placeholder="Enter image URL"
                value={formData.image}
                onChange={handleImageChange}
                className="w-full mt-1 border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                required
              />
            ) : (
              <div className="mt-2 relative w-40">
                <img
                  src={formData.image}
                  alt="Preview"
                  className="w-40 h-40 object-cover rounded-lg border"
                />
                <button
                  type="button"
                  onClick={removeImage}
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full px-2 py-1 text-xs"
                >
                  ✕
                </button>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Save Variant
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddVariantModal;
