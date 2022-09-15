import React from 'react'
import { AppContent, AppSidebar, AppFooter } from 'src/components/CoreUi'
function Main() {
  return (
    <>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </>
  )
}

export default Main
