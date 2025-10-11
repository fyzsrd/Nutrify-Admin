// CategoriesPage.jsx
import React, { useEffect, useState } from "react";
import CategoriesTable from "../components/CategoriesTable";
import CategoryModal from "../components/CategoryModal";
import DeleteConfirmModal from "../components/DeleteConfirmModal";
import { getCategory, addCategory, updateCategory, deleteCategory } from "../../../api/categoryApi";
import { toast } from "react-toastify";

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add"); // "add" | "edit"
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const res = await getCategory();
      setCategories(res.data.data);
    } catch (err) {
      console.error(err);
      toast.error(err?.response?.data?.message ?? "Failed to fetch categories");
    } finally {
      setLoading(false);
    }
  };

  // Handlers
  const handleAddCategory = () => {
    setModalMode("add");
    setSelectedCategory(null);
    setIsModalOpen(true);
  };

  const handleEditCategory = (category) => {
    setModalMode("edit");
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const handleDeleteCategory = (category) => {
    setSelectedCategory(category);
    setIsDeleteOpen(true);
  };

  const handleSave = async (formData) => {
    try {
      setLoading(true);
      const data = new FormData();
      data.append("name", formData.name);
      // normalize parentCategory
    if (formData.parentCategory && formData.parentCategory !== "") {
      data.append("parentCategory", formData.parentCategory);
    } else {
      data.append("parentCategory", "null"); // let backend interpret as null
    }
      data.append("isActive", formData.isActive);
      data.append("isMain", formData.isMain);
      if (formData.logo) data.append("thumbnail", formData.logo);

      if (modalMode === "add") {
        await addCategory(data);
        toast.success("Category added successfully");
      } else {
        await updateCategory(selectedCategory._id, data);
        toast.success("Category updated successfully");
      }

      await fetchCategories();
      setIsModalOpen(false);
    } catch (err) {
      console.error(err);
      toast.error(err?.response?.data?.message ?? "Save failed");
    } finally {
      setLoading(false);
    }
  };

  const confirmDelete = async () => {
    try {
      setLoading(true);
      await deleteCategory(selectedCategory._id);
      toast.success("Category deleted successfully");
      await fetchCategories();
      setIsDeleteOpen(false);
    } catch (err) {
      console.error(err);
      toast.error(err?.response?.data?.message ?? "Delete failed");
      setIsDeleteOpen(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Categories</h1>
        <button
          onClick={handleAddCategory}
          className="bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-blue-600"
        >
          + Add Category
        </button>
      </div>

      {categories.length === 0 ? (
        <p className="text-gray-500 text-center py-10">No categories available</p>
      ) : (
        <CategoriesTable
          categoryData={categories}
          onEdit={handleEditCategory}
          onDelete={handleDeleteCategory}
        />
      )}

      {isModalOpen && (
        <CategoryModal
          mode={modalMode}
          initialData={selectedCategory}
          parentCategories={categories}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
          loading={loading}
        />
      )}

      {isDeleteOpen && (
        <DeleteConfirmModal
          title="Delete Category"
          message={`Are you sure you want to delete "${selectedCategory?.name}"?`}
          onCancel={() => setIsDeleteOpen(false)}
          onConfirm={confirmDelete}
          loading={loading}
        />
      )}
    </div>
  );
};

export default CategoriesPage;
