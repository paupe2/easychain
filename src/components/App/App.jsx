import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../SideBar/Navbar'
import Home from '../SideBar/pages/Home'
import Crypto from '../SideBar/pages/Crypto'
import NFTS from '../SideBar/pages/Nfts'
import Exchanges from '../SideBar/pages/Exchanges'
import Support from '../SideBar/pages/Support';


function App () {
  return (
    <div className='App'>
      
        <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/nfts' element={<NFTS />} />
          <Route path='/crypto' element={<Crypto />} />
          <Route path='/exchanges' element={<Exchanges />} />
          <Route path='/support' element={<Support />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
