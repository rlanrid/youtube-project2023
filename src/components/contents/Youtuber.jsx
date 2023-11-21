import React from 'react'
import { youtuberText } from '../../data/youtuber'
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper/modules';


const Youtuber = () => {
    return (
        <section id='youtuber'>
            <h2>😁 여행 유튜버 모음</h2>
            <div className='youtuber__inner'>
                <Swiper
                    slidesPerView={10}
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
                            slidesPerView: 2,
                            spaceBetween: 15
                        },
                        400: {
                            slidesPerView: 3,
                            spaceBetween: 15
                        },
                        600: {
                            slidesPerView: 4,
                            spaceBetween: 20
                        },
                        960: {
                            slidesPerView: 5,
                            spaceBetween: 20
                        },
                        1200: {
                            slidesPerView: 6,
                            spaceBetween: 20
                        },
                        1600: {
                            slidesPerView: 7,
                            spaceBetween: 20
                        }
                    }}
                >
                    {youtuberText.map((youtuber, key) => (
                        <SwiperSlide key={key}>
                            <div className="youtuber play__icon">
                                <div className='youtuber__img'>
                                    <Link to={`/channel/${youtuber.channelId}`}>
                                        <img src={youtuber.img} alt={youtuber.author} />
                                    </Link>
                                </div>
                                <div className='youtuber__info'>{youtuber.author}</div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Youtuber
