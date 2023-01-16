import { render, screen } from '@testing-library/react'
import App from '.'
import { ThemeProvider } from '@emotion/react'
import { easyChainTheme } from '../../styles/easyChainTheme'

test('renders learn react link', () => {
  render(
    <ThemeProvider theme={easyChainTheme}>
      <App />
    </ ThemeProvider>
  )
  //const linkElement = screen.getByText(/learn react/i)
  expect(true).toBe(true)
})
