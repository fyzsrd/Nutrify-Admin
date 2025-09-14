import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/axios";

// Login thunk
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const res = await api.post("auth/login", { email, password });
      return res.data;
    } catch (err) {
      const message = err.response?.data?.message || err.message || "Login failed";
      return rejectWithValue(message);
    }
  }
);

const initialState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("auth");
      try { delete api.defaults.headers.common["Authorization"]; } catch {}
    },
    setAuthFromStorage: (state, action) => {
      state.user = action.payload?.user ?? null;
      state.token = action.payload?.token ?? null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => { state.loading = true; state.error = null; })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user ?? action.payload;
        state.token = action.payload.token ?? null;
        localStorage.setItem("auth", JSON.stringify(action.payload));
        if (action.payload.token) api.defaults.headers.common["Authorization"] = `Bearer ${action.payload.token}`;
      })
      .addCase(loginUser.rejected, (state, action) => { state.loading = false; state.error = action.payload; });
  },
});

export const { logout, setAuthFromStorage } = authSlice.actions;
export default authSlice.reducer;
