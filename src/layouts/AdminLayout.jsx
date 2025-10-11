import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, Outlet, useNavigate } from "react-router";
import { logout, logoutHelper } from "../app/store/authSlice";
import LogOutBox from "../components/common/LogOutBox";


const AdminLayout = () => {
  const [showLogoutBox,setShowLogoutBox]=useState(false)
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const handleLogOut=()=>{
    dispatch(logout())
    logoutHelper()
    setShowLogoutBox(false)
    navigate('/')
  }


  return (
   <div className="flex min-h-screen w-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-4 flex flex-col justify-between h-screen">
        {/* Top section */}
        <div>
          <h2 className="text-xl font-bold mb-6">Nutrify Admin</h2>
          <nav className="space-y-2">
            <NavLink to="/dashboard" className="block p-2 rounded hover:bg-gray-700">
              Dashboard
            </NavLink>
            <NavLink to="/products" className="block p-2 rounded hover:bg-gray-700">
              Products
            </NavLink>
            <NavLink to="/orders" className="block p-2 rounded hover:bg-gray-700">
              Orders
            </NavLink>
            <NavLink to="/categories" className="block p-2 rounded hover:bg-gray-700">
              Categories
            </NavLink>
            <NavLink to="/brands" className="block p-2 rounded hover:bg-gray-700">
              Brands
            </NavLink>
            <NavLink to="/customers" className="block p-2 rounded hover:bg-gray-700">
              Customers
            </NavLink>
            <NavLink to="/banners" className="block p-2 rounded hover:bg-gray-700">
              Banners
            </NavLink>
            <NavLink to="/coupons" className="block p-2 rounded hover:bg-gray-700">
              Coupons
            </NavLink>
          </nav>
        </div>

        {/* Bottom section - Logout */}
        <div className="mt-6 border-t border-gray-700 pt-4">
          <button
            onClick={()=>setShowLogoutBox(true)}
            className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 p-6 overflow-y-auto overflow-x-auto">
        <Outlet />
      </main>

      {showLogoutBox &&
       <LogOutBox onCancel={()=>setShowLogoutBox(false)} onConfirm={handleLogOut} />}
    </div>
  );
};

export default AdminLayout;
