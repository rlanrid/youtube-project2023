import React from 'react'

const Home = () => {
    return (
        <section id='today'>
            <div className="today__inner">
                <div className="today__thumb">

                </div>
                <div className="today__text">
                    <span className='today'>오늘의 픽!</span>
                    <h3 className='title'>"이게..되네?" 환율 박살난 스리랑카에서 단돈 만원으로 하루 즐기기 - 스리랑카4🇱🇰</h3>
                    <p className='desc'>
                        안녕하세요! 여러분, 오늘은 특별한 여행 유튜버 희철리즘을 소개합니다.
                        "여행 유튜버 희철리즘은 세계 각지의 아름다운 풍경과 문화를 탐험하며 그 경험을 우리에게 제공합니다.
                        그 화려한 여행 목적지와 유용한 여행 팁을 제공하여 여행 열망을 자극하고,
                        구독자들에게 새로운 여행 경험을 선사합니다."
                    </p>
                    <div className='info'>
                        <span className='autho'>희철리즘</span>
                        <span className="date">2022.11.06</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home