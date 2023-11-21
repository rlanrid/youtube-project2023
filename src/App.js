import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Main from './components/section/Main'

const Home = lazy(() => import('./pages/Home'));
const Today = lazy(() => import('./pages/Today'));
const Youtuber = lazy(() => import('./pages/Youtuber'));
const Channel = lazy(() => import('./pages/Channel'));
const Search = lazy(() => import('./pages/Search'));
const Video = lazy(() => import('./pages/Video'));


const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Main />}>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/today' element={<Today />}></Route>
          <Route path='/youtuber' element={<Youtuber />}></Route>
          <Route path='/channel/:channelId' element={<Channel />}></Route>
          <Route path='/search/:searchId' element={<Search />}></Route>
          <Route path='/video/:videoId' element={<Video />}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
