import { fireEvent, render, screen } from '@testing-library/react'
import FilterInput from '.'
import { ThemeProvider } from '@emotion/react'
import { easyChainTheme } from '../../styles/easyChainTheme'

test('all options are rendered', () => {
  const options = ['uno', 'dos', 'tres']

  render(
    <ThemeProvider theme={easyChainTheme}>
      <FilterInput options={options} />
    </ ThemeProvider>
  )

  const screenOptions = screen.queryAllByTestId('filter-select-option')
  expect(screenOptions.length).toBe(3)
  const serialized = screenOptions.reduce((accumulator, current) => accumulator + current.textContent + ',', '')
  expect(serialized).toBe('uno,dos,tres,')
})

test('when submit button is clicked an object is returned', () => {
    const options = ['uno', 'dos', 'tres']
  
    let result = {}

    const onChange = ({prop={}}) => {result = prop}

    render(
      <ThemeProvider theme={easyChainTheme}>
        <FilterInput options={options} onChange={onChange} />
      </ ThemeProvider>
    )
  
    const submitButton = screen.getByTestId('submit-button')
    fireEvent.click(submitButton)
    expect(Object.keys(result).length).toBe(1)
    expect(Object.keys(result)[0]).toBe('uno')
    expect(result[Object.keys(result)[0]]).toBe('')
  })

  test('when changing selected option and submitting a different prop key is received', () => {
    const options = ['uno', 'dos', 'tres']
  
    let result = {}

    const onChange = ({prop={}}) => {result = prop}

    render(
      <ThemeProvider theme={easyChainTheme}>
        <FilterInput options={options} onChange={onChange} />
      </ ThemeProvider>
    )
  
    fireEvent.change(screen.getByTestId('filter-select-element'), { target: { value: 'dos' } })

    const submitButton = screen.getByTestId('submit-button')
    fireEvent.click(submitButton)
    expect(Object.keys(result).length).toBe(1)
    expect(Object.keys(result)[0]).toBe('dos')
    expect(result[Object.keys(result)[0]]).toBe('')
  })

  test('when writing text and submitting a different prop value is received', () => {
    const options = ['uno', 'dos', 'tres']
  
    let result = {}

    const onChange = ({prop={}}) => {result = prop}

    render(
      <ThemeProvider theme={easyChainTheme}>
        <FilterInput options={options} onChange={onChange} />
      </ ThemeProvider>
    )
  
    fireEvent.change(screen.getByTestId('filter-input-text'), { target: { value: 'some-text' } })

    const submitButton = screen.getByTestId('submit-button')
    fireEvent.click(submitButton)
    expect(Object.keys(result).length).toBe(1)
    expect(Object.keys(result)[0]).toBe('uno')
    expect(result[Object.keys(result)[0]]).toBe('some-text')
  })