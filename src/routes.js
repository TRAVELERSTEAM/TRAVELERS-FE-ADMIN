import React from 'react'
const ReservationProduct = React.lazy(() => import('./components/ReservationProduct'))
const ProductList = React.lazy(() => import('./components/ProductList'))
const UserEdit = React.lazy(() => import('./pages/userEdit'))
const User = React.lazy(() => import('./pages/user'))

// 적용 예시
// const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

const routes = [
  { path: '/product/reservation', element: ReservationProduct },
  { path: '/product/productlist', element: ProductList },
  { path: '/useredit', element: UserEdit },
  { path: '/user', element: User },

  // 적용 예시
  // { path: '/theme/typography', name: 'Typography', element: Typography }
]

export default routes
