import Exchanges from '../Exchange/index'
import { HighlightTitle } from './styles'
import FilterInput from '../FilterInput'


function App () {
  return (
    <div className='App'>
      <Exchanges />
      <FilterInput options={['One', 'Two', 'Three', 'Caramba']} onChange={({ prop = {} }) => { console.log(prop) }} />
      <div style={{ width: '300px', height: '300px' }}>
        <LoadingComponent />
      </div>

    </div>
  )
}

export default App
