import { RawMarketDisplayer } from '../ApiExamples/NFTPortExamples'
import { HighlightTitle } from './styles'
import LoadingComponent from '../LoadingComponent'

function App () {
  return (
    <div className='App'>
      <HighlightTitle>
        Hello
      </HighlightTitle>
      <div style={{ width: '300px', height: '300px' }}>
        <LoadingComponent />
      </div>
      <RawMarketDisplayer />
    </div>
  )
}

export default App
