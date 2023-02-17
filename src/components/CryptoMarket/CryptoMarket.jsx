import React from 'react'
import './CryptoMarket.css'
import { RawCoinMarketList } from '../ApiExamples/CoinGeckoExamples'

const CryptoMarket = () => {
  return (
    <div className='list'>
      <RawCoinMarketList />
    </div>
  )
}

export default CryptoMarket
