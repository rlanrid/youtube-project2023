import React, { useEffect, useState } from 'react'
import Youtuber from '../components/contents/Youtuber'
import Today from '../components/contents/Today'
import Main from '../components/section/Main'
import VideoSlider from '../components/video/VideoSlider'
import { fetchFromAPI } from '../utils/api'


const Home = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(false);
    }, [])

    const searchPageClass = loading ? 'isLoading' : 'isLoaded';

    const [channelVideo, setChannelVideo] = useState();
    const [channelVideo2, setChannelVideo2] = useState();
    const [channelVideo3, setChannelVideo3] = useState();
    const [channelVideo4, setChannelVideo4] = useState();
    const [channelVideo5, setChannelVideo5] = useState();

    useEffect(() => {
        const v1 = "UCNhofiqfw5nl-NeDJkXtPvw";
        const v2 = "UCUcy82tGagXlj4t1p2todeQ";
        const v3 = "UCBpkIi5L8zEDXxK8hSnrcWg";
        const v4 = "UCchu6XLsbV9PISj5b7XArQA";
        const v5 = "UCugz3-UlkX2P77PtK1Ju0RA";

        const fetchResults = async () => {
            try {
                const videoData = await fetchFromAPI(`search?channelId=${v1}&part=snippet&order=date`);
                setChannelVideo(videoData.items);

                const videoData2 = await fetchFromAPI(`search?channelId=${v2}&part=snippet&order=date`);
                setChannelVideo2(videoData2.items);

                const videoData3 = await fetchFromAPI(`search?channelId=${v3}&part=snippet&order=date`);
                setChannelVideo3(videoData3.items);

                const videoData4 = await fetchFromAPI(`search?channelId=${v4}&part=snippet&order=date`);
                setChannelVideo4(videoData4.items);

                const videoData5 = await fetchFromAPI(`search?channelId=${v5}&part=snippet&order=date`);
                setChannelVideo5(videoData5.items);
            } catch (error) {
                console.log("Error -> ", error);
            }
        }
        fetchResults();
    }, [])

    return (
        <Main
            title="여행 유튜버"
            description="여행 유튜버 모음 사이트에 오신것을 환영합니다."
        >
            <Today />
            <Youtuber />
            <VideoSlider videos={channelVideo} title="빠니보틀 최신 영상" name='v1' />
            <VideoSlider videos={channelVideo2} title="모칠레로 최신 영상" name='v2' />
            <VideoSlider videos={channelVideo3} title="테리당 최신 영상" name='v3' />
            <VideoSlider videos={channelVideo4} title="시칠리안 최신 영상" name='v4' />
            <VideoSlider videos={channelVideo5} title="쏘이 최신 영상" name='v5' />
        </Main>
    )
}

export default Home