import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalStyled } from './globalStyled'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <GlobalStyled />
  </React.StrictMode>
)
