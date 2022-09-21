import React from 'react'
const UIexample = React.lazy(() => import('./pages/UIexample'))
// const  = React.lazy(() => import('./views/theme/colors/Colors'))

// 적용 예시
// const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

const routes = [
  { path: '/ui', element: UIexample },

  // 적용 예시
  // { path: '/theme/colors', name: 'Colors', element: Colors },
  // { path: '/theme/typography', name: 'Typography', element: Typography }
]

export default routes
