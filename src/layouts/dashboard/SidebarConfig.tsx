import React from 'react';
import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';
import fileTextFill from '@iconify/icons-eva/file-text-fill';
import lockFill from '@iconify/icons-eva/lock-fill';
import personAddFill from '@iconify/icons-eva/person-add-fill';
import alertTriangleFill from '@iconify/icons-eva/alert-triangle-fill';
import { NavItemConfig } from '@/models';

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig: NavItemConfig[] = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon(pieChart2Fill),
  },
  {
    title: 'user',
    path: '/dashboard/user',
    icon: getIcon(peopleFill),
  },
  {
    title: 'useredit',
    path: '/dashboard/useredit',
    icon: getIcon(peopleFill),
  },
  {
    title: 'reservation',
    path: '/dashboard/reservation',
    icon: getIcon(peopleFill),
  },
  {
    title: 'banner',
    path: '/dashboard/banner',
    icon: getIcon(shoppingBagFill),
  },
  {
    title: 'hot-product',
    path: '/dashboard/hot-products',
    icon: getIcon(shoppingBagFill),
  },
  {
    title: 'product',
    path: '/dashboard/products',
    icon: getIcon(shoppingBagFill),
  },
  {
    title: 'product-list',
    path: '/dashboard/product-list',
    icon: getIcon(shoppingBagFill),
  },
  {
    title: 'add-product',
    path: '/dashboard/add-product',
    icon: getIcon(shoppingBagFill),
  },
  {
    title: 'notice',
    path: '/dashboard/notice',
    icon: getIcon(shoppingBagFill),
  },
  {
    title: 'reference',
    path: '/dashboard/reference',
    icon: getIcon(shoppingBagFill),
  },
  {
    title: 'add-reference',
    path: '/dashboard/add-reference',
    icon: getIcon(shoppingBagFill),
  },
  {
    title: 'review',
    path: '/dashboard/review',
    icon: getIcon(shoppingBagFill),
  },
  {
    title: 'blog',
    path: '/dashboard/blog',
    icon: getIcon(fileTextFill),
  },
  {
    title: 'login',
    path: '/login',
    icon: getIcon(lockFill),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: getIcon(alertTriangleFill),
  },
];

export default sidebarConfig;
