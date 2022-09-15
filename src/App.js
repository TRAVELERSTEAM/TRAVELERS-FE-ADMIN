import React, { Component, Suspense } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './scss/style.scss'
import UIexample from './views/UIexample'
import Calendar from './views/pages/reservation/index'
import Main from './views/Main'
import NotFound from './views/NotFound'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route index element={<Main />} />
            <Route path="/login" name="Login Page" element={<Login />} />
            <Route path="/reservation" element={<Calendar />} />
            <Route path="/ui" element={<UIexample />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    )
  }
}

export default App
