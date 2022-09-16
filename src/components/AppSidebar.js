import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  CImage,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarToggler,
  CBreadcrumbItem,
} from '@coreui/react'

import { AppSidebarNav } from './AppSidebarNav'

import logo from './../assets/images/logo/logo.png'
import sLogo from './../assets/images/logo/s-logo.png'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

// sidebar nav config
import navigation from '../_nav'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >
      <CSidebarBrand className="d-none d-md-flex" to="/">
        <CBreadcrumbItem href="/" style={{ listStyle: 'none' }}>
          <CImage className="sidebar-brand-full" fluid src={logo} width={180} />
        </CBreadcrumbItem>
        <CImage className="sidebar-brand-narrow" fluid src={sLogo} width={25} />
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
      />
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
