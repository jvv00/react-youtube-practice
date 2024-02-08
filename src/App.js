import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/section/Main';

const Home = lazy(() => import('./views/Home'));
const Today = lazy(() => import('./views/Today'));
const Developer = lazy(() => import('./views/Developer'));
const Webd = lazy(() => import('./views/Webd'));
const Website = lazy(() => import('./views/Website'));
const Gsap = lazy(() => import('./views/Gsap'));
const Port = lazy(() => import('./views/Port'));
const Youtube = lazy(() => import('./views/Youtube'));
const Channel = lazy(() => import('./views/Channel'));
const Video = lazy(() => import('./views/Video'));
const Search = lazy(() => import('./views/Search'));
const Not = lazy(() => import('./views/Not'));

const App = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<Main/>}>
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
            </Suspense>
        </BrowserRouter>
    );
}

export default App;