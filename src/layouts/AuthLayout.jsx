import React from "react";
import { Outlet } from "react-router";


const AuthLayout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        {/* Logo / Brand */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">Nutrify Admin</h1>
          <p className="text-gray-500 text-sm mt-2">
            Sign in to manage your store
          </p>
        </div>

        {/* Outlet will render LoginPage / ForgotPasswordPage / OTP */}
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
