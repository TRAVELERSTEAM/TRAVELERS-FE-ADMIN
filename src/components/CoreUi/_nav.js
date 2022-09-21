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
        name: '로그인',
        to: '/login',
      },
      {
        component: CNavItem,
        name: '회원 정보 수정',
        to: '/useredit',
      },
      {
        component: CNavItem,
        name: '예약 목록',
        to: '/reservation',
      },
      {
        component: CNavItem,
        name: '메뉴 영역3',
      },
    ],
  },
]

export default _nav
