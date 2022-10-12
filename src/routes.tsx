import { Navigate, useRoutes } from 'react-router-dom';
import React, { ReactElement } from 'react';
import DashboardLayout from '@/layouts/dashboard';
import LogoOnlyLayout from '@/layouts/LogoOnlyLayout';
import User from '@/pages/User';
import Reservation from '@/pages/Reservation';
import DashboardApp from '@/pages/DashboardApp';
import Login from '@/pages/Login';
import MainBanner from '@/pages/MainBanner';
import HotProducts from '@/pages/HotProducts';
import Products from '@/pages/Products';
import ProductList from '@/pages/ProductList';
import AddProduct from '@/pages/AddProduct';
import Notice from '@/pages/Notice';
import Reference from '@/pages/Reference';
import AddReference from './pages/AddReference';
import Review from '@/pages/Review';
import Blog from '@/pages/Blog';
import NotFound from '@/pages/Page404';
import UserEdit from './pages/UserEdit';

export const Router = (): ReactElement => {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: '', element: <Navigate to="/dashboard/app" replace /> },
        { path: 'app', element: <DashboardApp /> },
        { path: 'user', element: <User /> },
        { path: 'useredit', element: <UserEdit /> },
        { path: 'reservation', element: <Reservation /> },
        { path: 'banner', element: <MainBanner /> },
        { path: 'hot-product', element: <HotProducts /> },
        { path: 'products', element: <Products /> },
        { path: 'product-list', element: <ProductList /> },
        { path: 'add-product', element: <AddProduct /> },
        { path: 'notice', element: <Notice /> },
        { path: 'reference', element: <Reference /> },
        { path: 'add-reference', element: <AddReference /> },
        { path: 'review', element: <Review /> },
        { path: 'blog', element: <Blog /> },
      ],
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'login', element: <Login /> },
        { path: '404', element: <NotFound /> },
        { path: '/', element: <Navigate to="/dashboard" /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]) as ReactElement;
};

export default Router;
