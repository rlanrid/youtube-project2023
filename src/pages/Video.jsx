import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/api';
import ReactPlayer from 'react-player';

import { SiYoutubemusic } from 'react-icons/si'
import { BiCommentDetail } from 'react-icons/bi'
import { AiOutlineLike } from 'react-icons/ai'
import Main from '../components/section/Main';

const Video = () => {
    const { videoId } = useParams();
    const [videoDetail, setVideoDetail] = useState(null);
    const [comments, setComments] = useState([]); //추가

    useEffect(() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${videoId}`)
            .then((data) => {
                console.log(data);
                setVideoDetail(data.items[0]);
            });

        // YouTube 동영상 댓글 가져오기
        const apiKey = process.env.REACT_APP_RAPID_API_KEY; // RapidAPI에서 생성한 API 키
        const requestOptions = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
                'X-RapidAPI-Key': apiKey,
            },
        };

        fetch(`https://youtube-v31.p.rapidapi.com/commentThreads?videoId=${videoId}`, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                setComments(data.items);
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [videoId]);

    return (
        <Main
            title="영상 페이지"
            decsription="여행 유튜브 영상을 볼 수 있습니다."
        >
            <section id='videoPage'>
                <h2>비디오</h2>
                {videoDetail && (
                    <div className="video__view">
                        <div className="video__play">
                            <ReactPlayer
                                playing={true}
                                url={`https://www.youtube.com/watch?v=${videoId}`}
                                width="100%"
                                height="100%"
                                style={{ position: "absolute", top: 0, left: 0 }}
                            />
                        </div>
                        <div className="video__info">
                            <h2 className='video__title'>{videoDetail.snippet.title}</h2>
                            <div className="video__channel">
                                <div className='id'>
                                    <Link to={`/channel/${videoDetail.snippet.channelId}`}>
                                        {videoDetail.snippet.channelTitle}
                                    </Link>
                                </div>
                                <div className='count'>
                                    <span className='view'><SiYoutubemusic />{videoDetail.statistics.viewCount}</span>
                                    <span className='like'><AiOutlineLike />{videoDetail.statistics.likeCount}</span>
                                    <span className='comment'><BiCommentDetail />{videoDetail.statistics.commentCount}</span>
                                </div>
                            </div>
                            <div className="video__desc">
                                {videoDetail.snippet.description}
                            </div>
                            <div className="video__comment">
                                <h2 className='commentTitle'>Comments</h2>
                                <ul>
                                    {comments.map((comment) => (
                                        <li key={comment.id}>
                                            <p>{comment.snippet.topLevelComment.snippet.textOriginal}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </Main>
    )
}

export default Video