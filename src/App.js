import React, { Suspense } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './scss/style.scss'
import UIexample from './pages/UIexample'
import Main from './pages/Main'
import NotFound from './pages/NotFound'
import Login from './pages/login'
import Reservation from './pages/reservation/index'

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
            <Route path="productlist" element={<ProductList />} />
            <Route path="reservation" element={<Reservation />} />
          </Route>
          <Route path="ui" element={<UIexample />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
