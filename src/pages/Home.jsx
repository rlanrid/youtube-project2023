import React from 'react'
import Youtuber from '../components/contents/Youtuber'
import Today from '../components/contents/Today'
import Main from '../components/section/Main'


const Home = () => {
    return (
        <Main
            title="여행 유튜버"
            description="여행 유튜버 모음 사이트에 오신것을 환영합니다."
        >
            <Today />
            <Youtuber />
        </Main>
    )
}

export default Home