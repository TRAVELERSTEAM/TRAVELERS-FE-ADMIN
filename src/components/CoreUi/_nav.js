import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavTitle,
    name: '메뉴 타이틀 영역',
  },
  {
    component: CNavItem,
    name: '로그인',
    to: '/',
  },
  {
    component: CNavItem,
    name: '유저정보수정',
    to: '/useredit',
  },
  {
    component: CNavGroup,
    name: '그룹메뉴 타이틀 영역',
    to: '/product',
    items: [
      {
        component: CNavItem,
        name: '예약 목록',
        to: '/product/reservation',
      },
      {
        component: CNavItem,
        name: '상품 목록',
        to: '/product/productlist',
      },
    ],
  },
]

export default _nav
