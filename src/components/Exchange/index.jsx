import React from 'react'
import Exchange from './exchange'
import data from './exchangesData'
import './styles.css'

const Exchanges = () => {
  return (
    <div className='row'>
      <h1>TOP 10 EXCHANGES:</h1><br />
      {data.map((exchange) => {
        return (
          <Exchange
            name={exchange.name}
            picture={exchange.picture}
            url={exchange.url}
            key={exchange.id}
          />
        )
      })}

    </div>
  )
}

export default Exchanges
