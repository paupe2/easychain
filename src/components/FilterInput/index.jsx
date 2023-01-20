import { useRef } from 'react'
import { StyledForm, StyledSelect, StyledInput, StyledSubmit, StyledOption } from './styles'

const FilterInput = ({ options = [], onChange = null }) => {
  const propValue = useRef('')
  const propKey = useRef(options.length > 0 ? options[0] : '')

  const handleSubmit = (event) => {
    event.preventDefault()
    const prop = {}
    prop[propKey.current] = propValue.current
    if (onChange) { onChange({ prop }) }
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type='text'
        placeholder='search...'
        onChange={(e) => { propValue.current = e.target.value }}
        data-testid='filter-input-text'
      />
      <StyledSelect
        onChange={(e) => { propKey.current = e.target.value }}
        defaultValue={0}
        data-testid='filter-select-element'
      >
        {options.map((option, index) =>
          <StyledOption key={index} value={option} data-testid='filter-select-option'>
            {option}
          </StyledOption>
        )}
      </StyledSelect>
      <StyledSubmit type='submit' data-testid='submit-button' />
    </StyledForm>
  )
}

export default FilterInput
