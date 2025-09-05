import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { LoginPage } from '../../features/auth/pages/LoginPage'

const AppRoutes = () => {

  const AppRouter=createBrowserRouter([
    {
      path:'/',
      element:<LoginPage />
    }
  ])
  return (
   <RouterProvider router={AppRouter} />
  )
}

export default AppRoutes