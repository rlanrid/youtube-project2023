import React, { useEffect, useState } from 'react'
import { youtuberText } from '../data/youtuber'
import { Link } from 'react-router-dom'
import Main from '../components/section/Main'

const Youtuber = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(false);
    }, [])

    const searchPageClass = loading ? 'isLoading' : 'isLoaded';
    return (
        <Main
            title="여행 유튜버 모음"
            description="여행 유튜버 모음 페이지입니다."
        >
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

export default Youtuber
