// src/api/brandApi.js
import api from "./axios";


// Get all brands
export const getBrands=()=>api.get('/brand')



// Add brand
// export const addBrand = (formData) =>
//   api.post("/brands", formData, {
//     headers: { "Content-Type": "multipart/form-data" },
//   })

// Update brand
// export const updateBrand = (id, formData) =>
//   api.put(`/brands/${id}`, formData, {
//     headers: { "Content-Type": "multipart/form-data" },
//   })

// Delete brand
// export const deleteBrand = (id) => api.delete(`/brands/${id}`)