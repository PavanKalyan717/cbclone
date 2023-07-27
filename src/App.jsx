import React from 'react'
import {NavBar,Feed,Footer,AboutUs, DisplayPhotos,} from '../src/components/index'
import News from './components/News'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
//import MatchDetails from './components/MatchDetails'
import NewsDetails from './components/NewsDetails'
import Stats from './components/Stats'
import NewsSection from './components/NewsSection'
import MatchInfo from './components/MatchInfo'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' exact element={<Feed />} />
          <Route path='/Photos' exact element={<DisplayPhotos />} />
          <Route path='/NewsDetails' exact element={<NewsDetails />} />
          <Route path='/AboutUs' exact element={<AboutUs />} />
          <Route path='/Stats' exact element={<Stats />} />
          <Route path='/MatchInfo/:matchid' exact element={<MatchInfo />} />
          <Route path='/NewsSection' exact element={<NewsSection />} />
          <Route path="*" element={<p>Path not resolved</p>} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App