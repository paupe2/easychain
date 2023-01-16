import FilterInput from '../FilterInput'
import { HighlightTitle } from './styles'

function App () {
  return (
    <div className='App'>
      <HighlightTitle>
        Hello
      </HighlightTitle>
      <FilterInput
        options={['Hi', 'Bye']}
        onChange={(prop) => { console.log(JSON.stringify(prop)) }}
      />
    </div>
  )
}

export default App
