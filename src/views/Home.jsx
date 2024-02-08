import React from 'react'
import Main from '../components/section/Main'
import Today from './Today'
import Developer from './Developer'
import Webd from './Webd'
import Website from './Website'
import Gsap from './Gsap'
import Port from './Port'
import Youtube from './Youtube'

const Home = () => {
    return (
        <Main 
            title = "웹스토리보이 유튜브"
            description="웹스토리보이 유튜버 사이트에 오신 것을 환영합니다.">
            <Today/>
            <Developer/>
            <Webd/>
            <Website/>
            <Gsap/>
            <Port/>
            <Youtube/>
        </Main>
    )
}

export default Home