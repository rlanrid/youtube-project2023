# 유튜브 API로 나만의 여행 유튜브 사이트 만들기
Youtube API를 이용해서 여행하는 사이트를 만들겠습니다.
평소에 여행을 좋아하기 때문에.....

<img src="https://github.com/rlanrid/youtube-project2023/blob/main/src/assets/img/cover.JPG">

## 설치
`npm install react-router-dom axios react-icon react-player sass react-helmet-async swiper`

1. react-router-dom은 React 프로젝트에서 브라우저 기반의 라우팅을 구현하기 위한 패키지입니다. 이 패키지를 사용하면 React 애플리케이션에서 페이지 간의 네비게이션 및 라우팅을 쉽게 관리할 수 있습니다.

2. axios는 HTTP 클라이언트 라이브러리로, 서버와의 데이터 통신을 위해 많이 사용됩니다. 만약 Axios를 프로젝트에 추가하려면, 다음과 같이 npm 명령어를 사용합니다:

3. react-player는 React 애플리케이션에서 동영상과 음악 등의 미디어를 쉽게 재생할 수 있도록 도와주는 React 컴포넌트입니다. 

4. react-helmet-async은 React 애플리케이션에서 동적으로 head 요소를 조작할 수 있게 해주는 라이브러리입니다. 

5. swiper는 모바일 및 데스크톱에서 사용할 수 있는 터치 슬라이드 라이브러리입니다. 


## 작업순서
- react 설치 `npx create-react-app 프로젝트이름`

- App.js와 Index.js를 제외한 쓸모없는 파일들 삭제

- App.js에 각 섹션을 만들고, components파일에 각 섹션들을 컴포넌트화

- YoutubeAPI키를 사용하기위해 .env파일을 만든뒤 `REACT_APP_YOUTUBE_API_KEY=[유튜브API키]` 를 설정하고, .gitignore에 env파일을 추가하고 재시작

- 더 보기 버튼을 클릭하면, nextPageToken을 받아와서 다음 영상들을 보이게 작업

- 검색페이지 컴포넌트를 만든 후 검색기능 구현


## Suspense 사용
리액트 Suspense는 코드 스플리팅과 비동기 데이터 가져오기와 같은 작업을 보다 쉽게 처리하도록 도와주는 기능입니다. Suspense를 사용하면 리액트 애플리케이션이 데이터를 불러오거나 지연된 컴포넌트를 처리하는 동안 로딩 상태를 관리할 수 있습니다.

- Suspense: 이 기능은 React에서 비동기적으로 렌더링된 컴포넌트의 로딩 상태를 관리하는 데 사용됩니다. Suspense 컴포넌트는 로딩 중인 컴포넌트가 준비될 때까지 대체 콘텐츠를 표시합니다. 이것은 특히 lazy와 함께 사용될 때 비동기적으로 불러오는 컴포넌트의 로딩을 처리하는 데 유용합니다.

- lazy: 이 기능은 동적 import()를 통해 코드 스플리팅을 가능하게 합니다. 즉, 애플리케이션의 크기를 줄이고 초기 로딩 시간을 단축하기 위해 컴포넌트를 필요한 시점에 로드합니다. lazy 함수는 동적으로 import된 컴포넌트를 반환하며, 이는 Suspense와 함께 사용될 때 비동기적 로딩을 처리하는 데 도움이 됩니다.

App.js에 lazy 함수를 사용하여 각 페이지 컴포넌트를 비동기적으로 불러오고, Suspense 컴포넌트로 감싸서 이들이 로딩될 때까지 `<Main />` 컴포넌트를 fallback으로 보여줍니다. 이 방식을 통해 초기 로딩 시간을 최적화하고 필요한 페이지 컴포넌트를 필요할 때 로드할 수 있도록 합니다.

즉, lazy는 컴포넌트를 동적으로 불러오는 데 사용되고, Suspense는 이러한 비동기적 로딩 상태를 관리하여 사용자 경험을 향상시키는 데 도움을 줍니다.

## SEO
react-helmet-async 라이브러리는 React 애플리케이션에서 동적으로 HTML `<head>` 요소를 관리하기 위한 도구입니다. 이 라이브러리의 HelmetProvider와 Helmet 컴포넌트는 페이지의 `<head>` 내부에 있는 메타데이터를 조작하고 제어하는 데 사용됩니다.

- HelmetProvider: HelmetProvider는 react-helmet-async 라이브러리의 컨텍스트를 제공합니다. 이를 통해 Helmet 컴포넌트들이 애플리케이션 내에서 동적으로 `<head>` 요소를 조작할 수 있도록 합니다. 주로 최상위 레벨에서 애플리케이션을 감싸 사용됩니다.

- Helmet: Helmet은 `<head>` 요소 안의 정보를 조작할 수 있게 해주는 컴포넌트입니다. 페이지 제목(title), 메타 태그(meta tags), 스타일시트 링크, 스크립트 등 `<head>` 안의 요소들을 동적으로 변경하거나 추가할 수 있습니다. title, meta, link, script 등을 설정하여 해당 정보를 동적으로 변경할 수 있습니다.

Main.jsx에 적용된 코드에서는 HelmetProvider로 전체 앱을 감싸고 있으며, Helmet 컴포넌트를 사용하여 페이지의 제목, 기본 타이틀, 메타 태그(description) 등을 동적으로 조작하고 있습니다. 또한, props.children을 사용하여 Main 컴포넌트로 전달된 다른 컴포넌트들을 표시하고 있습니다.

이렇게 함으로써 각 페이지마다 다른 제목이나 메타데이터를 설정하고, `<head>` 요소를 동적으로 조작하여 SEO 및 페이지의 메타정보를 관리할 수 있습니다.


## Swiper 사용법
1. Swiper 사이트에 들어갑니다. [링크](https://swiperjs.com/)

2. 우측 상단 Docs를 클릭해 Swiper에 대한 정보를 얻을 수 있습니다.

3. Resources의 Demo를 들어가면 예시 코드를 볼 수 있습니다.

## POSTMAN을 사용하여 API 개발 및 테스트

Postman은 다양한 플랫폼에서 사용 가능하며, API 개발자, 테스터, 시스템 관리자 등 다양한 역할의 사용자들에게 API 테스트 및 관리 작업을 효과적으로 수행할 수 있는 강력한 도구로 평가받고 있습니다.

## RapidAPI사용

RapidAPI는 다양한 웹 API에 액세스하고 이를 통합하며, API를 더 쉽게 찾고 사용할 수 있도록 도와주는 플랫폼입니다. 이 플랫폼은 개발자가 API를 손쉽게 탐색하고 사용할 수 있도록 API 호스팅 및 관리 서비스를 제공합니다.

## 검색기능

Search 컴포넌트를 사용하여 검색을 처리합니다. 사용자가 검색어를 입력하면 그에 따라 URL을 변경하여 새로운 경로로 이동하고 검색 결과를 표시합니다.

컴포넌트에서 상태값 searchKeyword를 사용하여 사용자가 입력한 검색어를 추적하고, setSearchKeyword를 통해 이 값을 변경합니다.

handleSearch 함수는 검색어가 있을 때만 URL을 변경하도록 구현되어 있습니다. 검색어가 비어 있지 않으면 useNavigate hook을 사용하여 React Router의 navigate 함수를 호출하여 새로운 경로로 이동합니다. 그 후에 검색어 상태를 초기화하여 빈 문자열로 설정하여 사용자가 새로운 검색을 할 수 있도록 합니다.

또한, Enter 키를 누르면 검색어를 가지고 handleSearch 함수가 호출되도록 onKeyDown 이벤트도 구현되어 있습니다. 이렇게 하면 사용자가 텍스트 입력 후 엔터를 누르거나 버튼을 클릭하여 검색할 수 있습니다.

결론적으로, 사용자가 검색어를 입력하면 해당 검색어로 새로운 경로로 이동하고, 검색 결과를 표시합니다.


## 트러블 슈팅
<details>
<summary>axios get 403 forbidden error</summary>
해결방법:   
1. 새로고침
2. 주소 더블 체크
3. 브라우저의 쿠키와 캐쉬 지우기
</details>   

<details>
<summary>error: failed to push some refs to </summary>
원인: 위와 같은 에러는 원격저장소(github)에 내 로컬(내컴퓨터)에는 없는 파일이 있을 떄 내 파일을 push를 하면 발생하는 오류입니다.   
   
해결방법:   
1. 먼저 원격저장소에 파일을 내 로컬로 가져옵니다.
`git pull (원격저장소별칭 보통 origin이라고 함) main`

2. 이후에는 push가 가능해지므로 add -> commit -> push 순으로 수정사항을 반영하면 해결됩니다.
</details>

