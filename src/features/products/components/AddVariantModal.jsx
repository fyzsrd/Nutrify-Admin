
import React, { useState } from "react";
import { addVariant } from "../api/variantApi";
import { toast } from "react-toastify";


const AddVariantModal = ({ productId, onClose,onVariantAdded }) => {
  const [loading, setLoading] = useState(false);
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

  const [preview, setPreview] = useState(null)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    setFormData((prev) => ({ ...prev, image: file }));
    if (file) {
      setPreview(URL.createObjectURL(file))
    }

  };

  const removeImage = () => {
    setFormData((prev) => ({ ...prev, image: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return
    setLoading(true)
    try {

      const formDataToSend = new FormData();
      formDataToSend.append("productId", productId);
      formDataToSend.append("weight", formData.weight);
      formDataToSend.append("weightType", formData.weightType);
      formDataToSend.append("flavor", formData.flavor);
      formDataToSend.append("mrp", formData.mrp);
      formDataToSend.append("price", formData.price);
      formDataToSend.append("stock", formData.stock);
      formDataToSend.append("isBestSeller", formData.isBestSeller);
      formDataToSend.append("isDefault", formData.isDefault);

      if (formData.image) {
        formDataToSend.append("images", formData.image);
      }



      const res = await addVariant(formDataToSend)
      console.log("variant saved saved:", res.data);
      toast.success("Variant saved successfully");
       if (onVariantAdded) {
        onVariantAdded();
      }
      onClose()
     
    } catch (err) {
      console.error(err.response?.data || err.message);
      toast.error("Error adding variant ❌");
      
    } finally {
      setLoading(false)
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
                type="file"
                placeholder="Enter image URL"
                value={formData.image}
                onChange={handleImageChange}
                //file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700
                className="w-full mt-1 border rounded-lg p-1 text-gray-500 border-gray-300 focus:ring-2
                 focus:ring-blue-500 file:px-2 file:bg-blue-600 file:border-0 file:py-2 file:rounded-lg
                 file:text-white"
                required
              />
            ) : (
              <div className="mt-2 relative w-40">
                <img
                  src={preview}
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
              disabled={loading}
              className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-white ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                }`}
            >
              {loading && (
                <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              )}
              {loading ? "Saving..." : "Save Variant"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddVariantModal;
