import React from 'react'
import {NavBar,Feed,Footer,AboutUs} from '../src/components/index'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import MatchDetails from './components/MatchDetails'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' exact element={<Feed />} />
          <Route path='/MatchDetails' exact element={<MatchDetails />} />
          <Route path='/AboutUs' exact element={<AboutUs />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App