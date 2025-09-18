import api from "./axios";


export const getProducts=()=>api.get('/product/panel')

export const addProduct = (formData) =>
  api.post("/product", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const deleteProduct=(id)=>api.get(`/product/${id}`)