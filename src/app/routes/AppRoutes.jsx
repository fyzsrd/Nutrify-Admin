import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'


//layout
import AuthLayout from '../../layouts/AuthLayout'
import AdminLayout from '../../layouts/AdminLayout'


//auth
import { LoginPage } from '../../features/auth/pages/LoginPage'

//Admin Layyout Pges
import DashBoardPage from '../../features/dashboard/pages/DashBoardPage'
import ProductsPage from '../../features/products/pages/ProductsPage'
import OrdersPage from '../../features/orders/pages/OrdersPage'
import CategoriesPage from '../../features/categories/pages/CategoriesPage'
import BrandsPage from '../../features/brands/pages/BrandsPage'
import CustomersPage from '../../features/customers/pages/CustomersPage'
import BannersPage from '../../features/banners/pages/BannersPage'
import CouponsPage from '../../features/coupons/pages/CouponsPage'
import ProductDetailPage from '../../features/products/pages/ProductDetailPage'
import ProtectedRoute from './ProtectedRoute'
import PublicRoute from './PublicRoute'
import UserDetails from '../../features/customers/pages/UserDetails'






const AppRoutes = () => {

  const AppRouter = createBrowserRouter([
    {
      element: <AuthLayout />,
      children: [
        {
          path: '/', element: (
            <PublicRoute >
              <LoginPage />
            </PublicRoute>

          ),
        }
      ]
    },
    {
      element: (
        <ProtectedRoute >
          <AdminLayout />
        </ProtectedRoute>

      ),
      children: [
        { path: '/dashboard', element: <DashBoardPage /> },
        {
          path: '/products',

          children: [
            { index: true, element: <ProductsPage /> },
            { path: ':id', element: <ProductDetailPage /> }
          ]
        },
        { path: '/orders', element: <OrdersPage /> },
        { path: '/categories', element: <CategoriesPage /> },
        { path: '/brands', element: <BrandsPage /> },
        {
          path: '/customers',

          children: [
            { index: true, element: <CustomersPage /> },
            { path: ':id', element: <UserDetails /> }

          ]
        },
        { path: '/banners', element: <BannersPage /> },
        { path: '/coupons', element: <CouponsPage /> },

      ]
    }
  ])
  return (
    <RouterProvider router={AppRouter} />
  )
}

export default AppRoutes