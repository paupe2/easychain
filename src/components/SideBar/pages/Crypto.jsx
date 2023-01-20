import React from 'react'
import FilterInput from '../../FilterInput'

const Crypto = () => {
  return (
    <div>
      <FilterInput options={['One', 'Two', 'Three', 'Caramba']} onChange={({ prop = {} }) => { console.log(prop) }} />
    </div>
  )
}

export default Crypto
