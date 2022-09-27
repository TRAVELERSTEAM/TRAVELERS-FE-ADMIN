import React, { Suspense } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './scss/style.scss'
import Main from './pages/Main'
import NotFound from './pages/NotFound'
import User from './pages/user'
import Login from './pages/login'
import ReservationProduct from './components/ReservationProduct'

//후에 상품 관련 페이지안에 넣을 예정
import ProductList from './components/ProductList'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={loading}>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/" element={<Main />}>
            {/* 회원정보 목록 */}
            <Route path="/user" element={<User />} />
            {/* 회원정보 수정 */}
            <Route path="/useredit" element={<UserEdit />} />
            {/* 상품 관리 */}
            <Route path="/product" element={<ProductList />}>
              {/* 상품등록 - 상품 목록 - 예약 목록 */}
              <Route path="/product/addproduct" element={<AddProduct />} />
              <Route path="/product/productlist" element={<ProductList />} />
              <Route path="/product/reservation" element={<ReservationProduct />} />
            </Route>
            {/* 컨텐츠 관리 */}
            <Route path="/management" element={<Notice />}>
              {/* 공지사항 관리 - 자료실 관리 - 후기 관리 */}
              <Route path="/management/notice" element={<Notice />} />
              <Route path="/management/reference" element={<Reference />} />
              <Route path="/management/review" element={<Review />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
