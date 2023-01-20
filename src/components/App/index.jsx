import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../SideBar/Navbar'
import Home from '../SideBar/pages/Home'
import Crypto from '../SideBar/pages/Crypto'
import Nfts from '../SideBar/pages/Nfts';
import Exchanges from '../SideBar/pages/Exchanges'
import Support from '../SideBar/pages/Support';
import FilterInput from '../FilterInput'
import LoadingComponent from '../LoadingComponent'



function App () {
  return (
    <div className='App'>
    
        <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/nfts' element={<Nfts />} />
          <Route path='/cryptos' element={<Crypto />} />
          <Route path='/exchanges' element={<Exchanges />} />
          <Route path='/support' element={<Support />} />
        </Routes>
      </Router>

      <Exchanges />
      <FilterInput options={['One', 'Two', 'Three', 'Caramba']} onChange={({ prop = {} }) => { console.log(prop) }} />
      <div style={{ width: '300px', height: '300px' }}>
        <LoadingComponent />
      </div>
    </div>
  )
}

export default App
