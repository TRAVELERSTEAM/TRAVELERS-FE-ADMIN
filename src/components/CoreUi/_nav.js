import React from 'react'
import { cilUser } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
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
    name: '로그인',
    to: '/',
  },
  {
    component: CNavItem,
    name: 'User',
    to: '/user',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: '회원 정보 수정',
    to: '/useredit',
  },
  {
    component: CNavGroup,
    name: '그룹메뉴 타이틀 영역',
    to: '/menu',
    items: [
      {
        component: CNavItem,
        name: '예약 목록',
        to: '/menu/reservation',
      },
      {
        component: CNavItem,
        name: '상품 목록',
        to: '/menu/productlist',
      },
    ],
  },
]

export default _nav
