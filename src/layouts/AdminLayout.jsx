import React from "react";
import { NavLink, Outlet } from "react-router";


const AdminLayout = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-4">
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
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 p-6 ">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
