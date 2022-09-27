import React from 'react'
import { CSidebar, CSidebarBrand, CSidebarNav, CImage, CBreadcrumbItem } from '@coreui/react'

import { AppSidebarNav } from './AppSidebarNav'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

// 왼쪽 nav바 메뉴 목록, router path 설정
import navigation from './_nav'
import logo from './../../assets/images/logo/logo.png'

const AppSidebar = () => {
  // 아래 코드 리코일로 적용 필요함
  // const dispatch = useDispatch()
  // const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  // const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CSidebar
      position="fixed"
      // unfoldable={unfoldable}
      // visible={sidebarShow}
      // onVisibleChange={(visible) => {
      //   dispatch({ type: 'set', sidebarShow: visible })
      // }}
    >
      <CSidebarBrand className="d-none d-md-flex">
        <CBreadcrumbItem href="/" style={{ listStyle: 'none' }}>
          <CImage className="sidebar-brand-full" fluid src={logo} width={180} />
        </CBreadcrumbItem>
      </CSidebarBrand>

      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
