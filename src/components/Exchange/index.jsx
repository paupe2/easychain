import React from 'react';
import Exchange from './exchange';
import Binance from './Binance.png'


const Exchanges = () => {
  const exchanges = [
    {
      id: 1,
      name: "Binace",
      picture : "Binance.png"
    },
    {
      id: 2,
      name: "Coinbase Exchange",
      picture : "binance.png"
    },
    {
      id: 3,
      name: "Kraken",
      picture : "binance.png"
    },
    {
      id: 4,
      name: "KuCoin",
      picture : "binance.png"
    },
    {
      id: 5,
      name: "Bitfinex",
      picture : "binance.png"
    },
    {
      id: 6,
      name: "Gemini",
      picture : "binance.png"
    },
    {
      id: 7,
      name: "Coincheck",
      picture : "binance.png"
    },
    {
      id: 8,
      name: "Bitstamp",
      picture : "binance.png"
    },
    {
      id: 9,
      name: "Bybit",
      picture : "binance.png"
    },
  ]
  console.log(exchanges.length)

  return (
    <div>
      {exchanges.map((exchange) => {
        return (
          <Exchange name = {exchange.name} picture = {exchange.picture}/>
        )
      })}

    </div>
  )
}

export default Exchanges