import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper/modules';

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}


const VideoSlider = ({ videos, title, name }) => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(false);
    }, [])

    const searchPageClass = loading ? 'isLoading' : 'isLoaded';
    return (
        <section id={name} className={searchPageClass}>
            <h2>{title}</h2>

            <div className="video__slider">
                <Swiper
                    slidesPerView={5}
                    spaceBetween={30}
                    navigation={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Navigation]}
                    className='mySwiper'
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 15
                        },
                        400: {
                            slidesPerView: 1,
                            spaceBetween: 15
                        },
                        600: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        960: {
                            slidesPerView: 3,
                            spaceBetween: 20
                        },
                        1600: {
                            slidesPerView: 4,
                            spaceBetween: 20
                        }
                    }}
                >
                    {videos && videos.map((video, key) => (
                        <SwiperSlide key={key}>
                            <div className="video">
                                <div className="video__thumb play__icon">
                                    <Link
                                        to={`/video/${video.id.videoId}`}
                                        style={{ backgroundImage: `url(${video.snippet.thumbnails.high.url})` }}
                                    >
                                    </Link>
                                </div>
                                <div className="video__info">
                                    <h3 className='title'>
                                        <Link to={`/video/${video.id.videoId}`}>{video.snippet.title}</Link>
                                    </h3>
                                    <p className='desc'>
                                        {video.snippet.description}
                                    </p>
                                    <div className='info'>
                                        <Link to={`/channel/${video.snippet.channelId}`} className='author'>{video.snippet.channelTitle}</Link>
                                        <span className='date'>{formatDate(video.snippet.publishedAt)}</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default VideoSlider
