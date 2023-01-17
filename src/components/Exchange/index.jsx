import React from 'react';
import Exchange from './exchange';


const Exchanges = () => {
  const exchanges = [
    {
      id: 1,
      name: "Binace",
      picture : "images/Binance.png"
    },
    {
      id: 2,
      name: "Coinbase Exchange",
      picture : "images/Bitfinex.png"
    },
    {
      id: 3,
      name: "Kraken",
      picture : "images/Kraken.png"
    },
    {
      id: 4,
      name: "KuCoin",
      picture : "images/KuCoin.png"
    },
    {
      id: 5,
      name: "Bitfinex",
      picture : "images/Bitfinex.png"
    },
    {
      id: 6,
      name: "Gemini",
      picture : "images/Gemini.png"
    },
    {
      id: 7,
      name: "Coincheck",
      picture : "images/Coincheck.png"
    },
    {
      id: 8,
      name: "Bitstamp",
      picture : "images/Bitstamp.png"
    },
    {
      id: 9,
      name: "Bybit",
      picture : "images/Bybit.png"
    },
  ]

  return (
    <div>
      {exchanges.map((exchange) => {
        return (
          <Exchange 
            name = {exchange.name}
            picture = {exchange.picture}
            key = {exchange.id}
            />
        )
      })}

    </div>
  )
}

export default Exchanges