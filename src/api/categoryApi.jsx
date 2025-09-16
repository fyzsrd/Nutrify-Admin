import api from "./axios";

export const getCategory=()=>api.get('/category')

// Add catgeroy
export const addCategory = (formData) =>
  api.post("/category", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  

// Update catgeroy
export const updateCategory = (id, formData) =>
  api.put(`/category/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  })

// Delete catgeroy

export const deleteCategory = (id) => api.delete(`/category/${id}`);