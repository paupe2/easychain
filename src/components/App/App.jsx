import { HighlightTitle } from './styles'
import LoadingComponent  from '../LoadingComponent'

function App () {
  return (
    <div className='App'>
        <HighlightTitle>
          Hello
        </HighlightTitle>
        <div style={{width:'20rem', height:'10rem'}} >
          <LoadingComponent />
        </div>
    </div>
  )
}

export default App
