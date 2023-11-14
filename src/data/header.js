import { MdOutlineTravelExplore } from 'react-icons/md'
import { MdFavorite } from 'react-icons/md'
import { TiSocialYoutube } from 'react-icons/ti'

import { AiFillGithub } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import { AiFillCodepenCircle } from 'react-icons/ai'

export const menuText = [
    {
        title: "여행 유튜버 홈",
        icon: <MdOutlineTravelExplore />,
        src: "/"
    }, {
        title: "오늘의 여행지 탐험",
        icon: <MdFavorite />,
        src: "/today"
    }, {
        title: "유명 유튜버",
        icon: <TiSocialYoutube />,
        src: "/youtuber"
    },
]

export const keywordText = [
    {
        title: "HALIDONMUSIC",
        src: "/search/HALIDONMUSIC"
    }, {
        title: "TwoSetViolin",
        src: "/search/TwoSetViolin"
    }, {
        title: "DW Classical Music",
        src: "/search/DW Classical Music"
    }, {
        title: "Music Compliation",
        src: "/search/Music Compliation"
    }, {
        title: "Brilliant Classics",
        src: "/search/Brilliant Classics"
    }, {
        title: "인생클래식",
        src: "/search/인생클래식"
    }, {
        title: "뮤라벨",
        src: "/search/뮤라벨"
    }, {
        title: "ClickClassic",
        src: "/search/ClickClassic"
    }, {
        title: "Classical Piano Music",
        src: "/search/Classical Piano Music"
    }, {
        title: "또모",
        src: "/search/또모"
    }
]

export const snsText = [
    {
        title: "github",
        src: "https://github.com/rlanrid",
        icon: <AiFillGithub />
    }, {
        title: "youtube",
        src: "https://www.youtube.com/rlanrid",
        icon: <AiFillYoutube />
    }, {
        title: "codepen",
        src: "https://www.codepen.io/rlanrid",
        icon: <AiFillCodepenCircle />
    },
]