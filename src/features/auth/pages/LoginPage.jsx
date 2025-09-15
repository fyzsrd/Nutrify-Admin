import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { loginUser } from "../../../app/store/authSlice";

export const LoginPage = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const {loading,error}=useSelector((state)=>state.auth);

  const [email, setEmail] = useState("");
  const [password,setPassword]=useState("");



  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loginUser({email,password}))
    .unwrap()
    .then(()=>{
      navigate('/dashboard') //redirect on success
    })
    .catch(()=>{
        // error is already handled in redux state
    })
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          required
          placeholder="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          className="w-full px-4 py-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <input
          type="password"
          required
          value={password}
           onChange={(e) => setPassword(e.target.value)}

          placeholder="••••••••"
          className="w-full px-4 py-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none"
        />
      </div>

      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 text-sm text-gray-600">
          <input type="checkbox" className="rounded border-gray-300" /> Remember me
        </label>
        <a
          href="/forgot-password"
          className="text-sm font-medium text-indigo-600 hover:underline"
        >
          Forgot password?
        </a>
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 rounded-xl text-base bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50"
      >
        {loading ? "Signing in..." : "Sign In"}
      </button>
    </form>
  );
};
