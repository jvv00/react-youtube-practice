import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './views/Home'
import Today from './views/Today'
import Developer from './views/Developer'
import Webd from './views/Webd'
import Website from './views/Website'
import Gsap from './views/Gsap'
import Port from './views/Port'
import Youtube from './views/Youtube'
import Channel from './views/Channel'
import Video from './views/Video'
import Search from './views/Search'
import Not from './views/Not'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/today' element={<Today />} />
                <Route path='/developer' element={<Developer />} />
                <Route path='/webd' element={<Webd />} />
                <Route path='/website' element={<Website />} />
                <Route path='/gsap' element={<Gsap />} />
                <Route path='/port' element={<Port />} />
                <Route path='/youtube' element={<Youtube />} />
                <Route path='/channel/:channelId' element={<Channel />} />
                <Route path='/video/:videoId' element={<Video />} />
                <Route path='/search/:searchId' element={<Search />} />
                <Route path='*' element={<Not />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;