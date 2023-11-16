import React from 'react'
import { youtuberText } from '../data/youtuber'
import { Link } from 'react-router-dom'

const Youtuber = () => {
    return (
        <section id='youtuberPage'>
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
    )
}

export default Youtuber
