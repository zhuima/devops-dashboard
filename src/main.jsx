import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// 导入antd样式文件
import 'antd/dist/antd.min.css'
// 导入全局样式文件，防止样式覆盖
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
