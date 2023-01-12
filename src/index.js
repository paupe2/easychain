import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ThemeProvider } from '@emotion/react'
import { easyChainTheme } from './styles/easyChainTheme'
import App from './components/App/App'
import Exchange from './components/Exchange/index'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeProvider theme={easyChainTheme}>
      <App />
      <Exchange />
   </ThemeProvider>
  </React.StrictMode>
)
