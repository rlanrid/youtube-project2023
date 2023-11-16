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
        title: "오늘의 추천 픽!",
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
        title: "희철리즘",
        src: "/search/희철리즘"
    }, {
        title: "빠니보틀",
        src: "/search/빠니보틀"
    }, {
        title: "모칠레로",
        src: "/search/모칠레로"
    }, {
        title: "테리당",
        src: "/search/테리당"
    }, {
        title: "시칠리안",
        src: "/search/시칠리안"
    }, {
        title: "쏘이",
        src: "/search/쏘이Soy The World"
    }, {
        title: "세계는요지경",
        src: "/search/세계는요지경"
    }, {
        title: "레리꼬",
        src: "/search/레리꼬"
    }, {
        title: "캐럿맨 여행기",
        src: "/search/캐럿맨 여행기"
    }, {
        title: "원지의하루",
        src: "/search/원지의하루"
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