import React from 'react'
// 추후 페이지 연결시 같이 적용예정
// AppContent
import { AppSidebar } from 'src/components/CoreUi'
import { Outlet } from 'react-router-dom'

function Main() {
  return (
    <>
      <AppSidebar>{/* <AppContent /> */}</AppSidebar>
      <Outlet />
    </>
  )
}

export default Main
