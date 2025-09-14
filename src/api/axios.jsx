import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/admin`,
   withCredentials: true, // send cookies
});

export default api;