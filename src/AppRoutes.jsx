import React, { Children } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from './layout/Layout';
import Homepage from './pages/Homepage';
import ProductsPage from './pages/ProductsPage';

function AppRoutes() {
  const AppRoutes = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [{ path: '/', element: <Homepage /> },
        {path: '/products', element: <ProductsPage />},
      ],
    },
  ]);
  return <RouterProvider router={AppRoutes} />;
}

export default AppRoutes;
