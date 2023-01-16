import { RawMarketDisplayer } from '../ApiExamples/NFTPortExamples'
import { HighlightTitle } from './styles'
import FilterInput from '../FilterInput'

function App () {
  return (
    <div className='App'>
      <HighlightTitle>
        Hello
      </HighlightTitle>
      <FilterInput options={['One', 'Two', 'Three', 'Caramba']} />
      <RawMarketDisplayer />
    </div>
  )
}

export default App
