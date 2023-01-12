import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ThemeProvider } from '@emotion/react'
import { easyChainTheme } from './styles/easyChainTheme'
import { getDefaultProvider } from 'ethers'
import { NftProvider } from 'use-nft'
import App from './components/App'

const ethersConfig = {
  provider: getDefaultProvider('homestead')
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeProvider theme={easyChainTheme}>
      <NftProvider fetcher={['ethers', ethersConfig]}>
        <App />
      </NftProvider>
    </ThemeProvider>
  </React.StrictMode>
)
