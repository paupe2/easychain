import { RawCoinMarketList } from '../ApiExamples/CoinGeckoExamples'
import { HighlightTitle } from './styles'

function App () {
  return (
    <div className='App'>
      <HighlightTitle>
        Hello
      </HighlightTitle>
      <RawCoinMarketList />
    </div>
  )
}

export default App
