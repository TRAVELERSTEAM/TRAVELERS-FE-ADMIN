import React from 'react'
const UIexample = React.lazy(() => import('./pages/UIexample'))
const ReservationProduct = React.lazy(() => import('./components/ReservationProduct'))
const ProductList = React.lazy(() => import('./components/ProductList'))

// 적용 예시
// const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

const routes = [
  { path: '/ui', element: UIexample },
  { path: '/menu/reservation', element: ReservationProduct },
  { path: '/menu/productlist', element: ProductList },

  // 적용 예시
  // { path: '/theme/typography', name: 'Typography', element: Typography }
]

export default routes
