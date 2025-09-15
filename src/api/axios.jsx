import axios from "axios";
import { logoutHelper } from "../app/store/authSlice"; // ✅ new helper, no circular import

// Helper to decode JWT payload
function decodeToken(token) {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    return JSON.parse(window.atob(base64));
  } catch (e) {
    console.log(e)
    return null;
  }
}

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/admin`,
  withCredentials: true,
});

// Interceptor
api.interceptors.request.use((config) => {
  const authData = localStorage.getItem("auth");
  const parsed = authData ? JSON.parse(authData) : null;

  if (parsed?.token) {
    const decoded = decodeToken(parsed.token);
    const now = Date.now() / 1000;

    if (decoded?.exp && decoded.exp < now) {
      logoutHelper(); // ✅ use helper instead of dispatching from here
      window.location.href = "/login";
      return Promise.reject(new Error("Token expired. Please login again."));
    }

    config.headers.Authorization = `Bearer ${parsed.token}`;
  }

  return config;
});

export default api;
