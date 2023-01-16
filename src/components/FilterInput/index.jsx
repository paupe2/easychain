import { useRef } from 'react'
import Select from 'react-select'
import { StyledForm, StyledSelect, StyledInput, StyledSubmit, StyledOption } from './styles'

const FilterInput = ({ options = [], onChange = null }) => {
  const propValue = useRef('')
  const propKey = useRef('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const prop = {}
    prop[propKey.current] = propValue.current
    onChange(prop)
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type='text'
        placeholder='search...'
        onChange={(e) => { propValue.current = e.target.value }}
      />
      <StyledSelect
        onChange={(e) => { propKey.current = e.target.value }}
        defaultValue={0}
      >
        {options.map((option, index) => 
          <StyledOption key={index} value={option}>
            {option}
          </StyledOption>
        )}
      </StyledSelect>
      <StyledSubmit type='submit' />
    </StyledForm>
  )
}

export default FilterInput
