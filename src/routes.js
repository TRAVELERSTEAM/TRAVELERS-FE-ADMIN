import React from 'react'
const Calendar = React.lazy(() => import('./views/pages/reservation/index'))
const UIexample = React.lazy(() => import('./views/UIexample'))

// 적용 예시
// const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
// const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

const routes = [
  { path: '/ui', element: UIexample },
  { path: '/calendar', name: 'Calendar', element: Calendar },

  // 적용 예시
  // { path: '/theme/colors', name: 'Colors', element: Colors },
  // { path: '/theme/typography', name: 'Typography', element: Typography }
]

export default routes
