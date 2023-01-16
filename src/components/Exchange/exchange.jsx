import React from 'react'

const Exchange = (props) => {
  return (
    <div>
        <h3>{props.name}</h3>
        <img src = {props.picture} alt = "My pick "/>
    </div>
  )
}

export default Exchange