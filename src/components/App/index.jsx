import { HighlightTitle } from './styles'
import FilterInput from '../FilterInput'
import LoadingComponent from '../LoadingComponent'

function App () {
  return (
    <div className='App'>
      <HighlightTitle>
        Hello
      </HighlightTitle>
      <FilterInput options={['One', 'Two', 'Three', 'Caramba']} onChange={({ prop = {} }) => { console.log(prop) }} />
      <div style={{ width: '300px', height: '300px' }}>
        <LoadingComponent />
      </div>
    </div>
  )
}

export default App
