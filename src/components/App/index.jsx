import Exchanges from '../Exchange/index'
import FilterInput from '../FilterInput'
import LoadingComponent from '../LoadingComponent'


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
