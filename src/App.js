import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Today from './pages/Today'
import Youtuber from './pages/Youtuber'
import Channel from './pages/Channel'
import Header from './components/section/Header'
import Footer from './components/section/Footer'
import Main from './components/section/Main'
import Search from './pages/Search'
import Video from './pages/Video'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/today' element={<Today />}></Route>
          <Route path='/youtuber' element={<Youtuber />}></Route>
          <Route path='/channel/:channelId' element={<Channel />}></Route>
          <Route path='/search/:searchId' element={<Search />}></Route>
          <Route path='/video/:videoId' element={<Video />}></Route>
        </Routes>
      </Main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
