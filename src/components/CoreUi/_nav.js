import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavTitle,
    name: '메뉴 타이틀 영역',
  },
  {
    component: CNavItem,
    name: '⭐UI예시보기(메뉴 영역)',
    to: '/ui',
  },
  {
    component: CNavGroup,
    name: '그룹메뉴 타이틀 영역',

    items: [
      {
        component: CNavItem,
        name: '메뉴 영역1',
      },
      {
        component: CNavItem,
        name: '메뉴 영역2',
      },
    ],
  },
]

export default _nav
