import React from 'react'
import './styles.css'

const Exchange = (props) => {
  return (
      <div class="card-box">
          <div class="size">
          <a href={props.url}><img src = {props.picture} class="img" alt = ''/></a>
          </div>
          <div className='text'>
            <h4>{props.name}</h4>
          </div>
    </div>
  )
}

export default Exchange