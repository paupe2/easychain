import { HighlightTitle } from './styles'
import FilterInput from '../FilterInput'

function App () {
  return (
    <div className='App'>
      <HighlightTitle>
        Hello
      </HighlightTitle>
      <FilterInput options={['One', 'Two', 'Three', 'Caramba']} onChange={({ prop = {} }) => { console.log(prop) }} />
    </div>
  )
}

export default App
