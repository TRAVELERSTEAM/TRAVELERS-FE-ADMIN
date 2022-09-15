import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavTitle,
    name: '메뉴 타이틀',
  },
  {
    component: CNavItem,
    name: 'UI예시보기(메뉴1)',
    to: '/ui',
  },
  {
    component: CNavGroup,
    name: '그룹메뉴 타이틀',

    items: [
      {
        component: CNavItem,
        name: '메뉴a',
      },
      {
        component: CNavItem,
        name: '메뉴b',
      },
    ],
  },
]

export default _nav
