# 유튜브 API로 나만의 여행 유튜브 사이트 만들기
Youtube API를 이용해서 여행하는 사이트를 만들겠습니다.
평소에 여행을 좋아하기 때문에.....

<img src="https://rlanrid.github.io/youtube-project2023/src/assets/img/cover.png">


## 설치
`npm install react-router-dom axios react-icon react-player sass react-helmet-async swiper`

1. react-router-dom은 React 프로젝트에서 브라우저 기반의 라우팅을 구현하기 위한 패키지입니다. 이 패키지를 사용하면 React 애플리케이션에서 페이지 간의 네비게이션 및 라우팅을 쉽게 관리할 수 있습니다.

2. axios는 HTTP 클라이언트 라이브러리로, 서버와의 데이터 통신을 위해 많이 사용됩니다. 만약 Axios를 프로젝트에 추가하려면, 다음과 같이 npm 명령어를 사용합니다:

3. react-player는 React 애플리케이션에서 동영상과 음악 등의 미디어를 쉽게 재생할 수 있도록 도와주는 React 컴포넌트입니다. 

4. react-helmet-async은 React 애플리케이션에서 동적으로 head 요소를 조작할 수 있게 해주는 라이브러리입니다. 

5. swiper는 모바일 및 데스크톱에서 사용할 수 있는 터치 슬라이드 라이브러리입니다. 


## 작업순서
1. react 설치 `npx create-react-app 프로젝트이름`

2. App.js와 Index.js를 제외한 쓸모없는 파일들 삭제

3. App.js에 각 섹션을 만들고, components파일에 각 섹션들을 컴포넌트화

4. YoutubeAPI키를 사용하기위해 .env파일을 만든뒤 `REACT_APP_YOUTUBE_API_KEY=[유튜브API키]` 를 설정하고, .gitignore에 env파일을 추가하고 재시작

5. Search페이지에 fetch로 정보를 가져오고, api키값은 .env파일에 선언한 변수값으로 지정

6. 더 보기 버튼을 클릭하면, nextPageToken을 받아와서 다음 영상들을 보이게 작업




## Suspense 사용
리액트 Suspense는 코드 스플리팅과 비동기 데이터 가져오기와 같은 작업을 보다 쉽게 처리하도록 도와주는 기능입니다. Suspense를 사용하면 리액트 애플리케이션이 데이터를 불러오거나 지연된 컴포넌트를 처리하는 동안 로딩 상태를 관리할 수 있습니다.


## Swiper 사용법
1. Swiper 사이트에 들어갑니다. [링크](https://swiperjs.com/)

2. 우측 상단 Docs를 클릭해 Swiper에 대한 정보를 얻을 수 있습니다.

3. Resources의 Demo를 들어가면 예시 코드를 볼 수 있습니다.

## POSTMAN을 사용하여 API 개발 및 테스트

Postman은 다양한 플랫폼에서 사용 가능하며, API 개발자, 테스터, 시스템 관리자 등 다양한 역할의 사용자들에게 API 테스트 및 관리 작업을 효과적으로 수행할 수 있는 강력한 도구로 평가받고 있습니다.

## RapidAPI사용

RapidAPI는 다양한 웹 API에 액세스하고 이를 통합하며, API를 더 쉽게 찾고 사용할 수 있도록 도와주는 플랫폼입니다. 이 플랫폼은 개발자가 API를 손쉽게 탐색하고 사용할 수 있도록 API 호스팅 및 관리 서비스를 제공합니다.


## 트러블 슈팅
<details>
<summary>axios get 403 forbidden error</summary>
해결방법:   
1. 새로고침
2. 주소 더블 체크
3. 브라우저의 쿠키와 캐쉬 지우기
</details>

