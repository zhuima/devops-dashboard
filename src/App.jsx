import { useState } from 'react'

import './App.scss'
// 导入路由
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// 导入页面组件
import DevOpsLayout from './pages/Layout'
import Login from './pages/Login'



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<DevOpsLayout />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
