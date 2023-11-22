import React, { useEffect, useState } from 'react'

import { todayText } from '../data/today'
import { youtuberText } from '../data/youtuber'
import Main from '../components/section/Main'
import { Link } from 'react-router-dom'

const Today = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(false);
    }, [])

    const searchPageClass = loading ? 'isLoading' : 'isLoaded';
    return (
        <Main
            title="오늘의 추천 영상"
            description="오늘의 추천 유튜브 영상입니다."
        >
            <section id='today' className={searchPageClass}>
                <h2>오늘의 추천 픽!!</h2>
                {todayText.map((text, key) => (
                    <div className="today__inner" key={key}>
                        <div className="today__thumb">
                            <Link
                                to={`/video/${text.url}`}
                                style={{ backgroundImage: `url(${text.img})` }}
                            >
                            </Link>
                        </div>
                        <div className="today__text">
                            <span className='today'>오늘의 픽!</span>
                            <h3 className='title'>{text.title}</h3>
                            <p className='desc'>
                                {text.desc}
                            </p>
                            <div className='info'>
                                <span className='author'>{text.author}</span>
                                <span className="date">{text.date}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            <section id='youtuberPage' className={searchPageClass}>
                <h2>😁 여행 유튜버 모음</h2>
                <div className='youtuber__inner'>
                    {youtuberText.map((youtuber) => (
                        <div className="youtuber play__icon" key={youtuber.channelId}>
                            <div className='youtuber__img'>
                                <Link to={`/channel/${youtuber.channelId}`}>
                                    <img src={youtuber.img} alt={youtuber.author} />
                                </Link>
                            </div>
                            <div className='youtuber__info'>{youtuber.author}</div>
                        </div>
                    ))}
                </div>
            </section>
        </Main>
    )
}

export default Today
