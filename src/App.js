import React, { Suspense } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './scss/style.scss'
import UIexample from './pages/UIexample'
import Calendar from './pages/reservation/index'
import Main from './pages/Main'
import NotFound from './pages/NotFound'
import Login from './pages/login'
import Product from './pages/product'

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
          <Route index element={<Main />} />
          <Route path="/login" name="Login Page" element={<Login />} />
          <Route path="/reservation" element={<Calendar />} />
          <Route path="/ui" element={<UIexample />} />
          <Route path="/product" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
