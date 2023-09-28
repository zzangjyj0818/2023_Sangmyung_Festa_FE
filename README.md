## 2023년 상명대학교 축제 홈페이지 [![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fzzangjyj0818%2F2023_Sangmyung_Festa_FE&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)
<img src="/frontend/src/assets/common/Logo1.png" />


## 목차
  - [개요](#-개요)
  - [설치 및 구동](#-설치-및-구동)
  - [프로젝트 설명](#-프로젝트-설명)
  - [만든이들](#-만들이들)
  - [느낀점](#-느낀점)

## ❓ 개요 
확실히, 대학교 축제는 **학교 커뮤니티의 크나큰 이벤트**이다. 이에 따라, 모든 학생들이 축제를 최대한 즐길 수 있도록 필요한 정보를 쉽게 얻을 수 있어야 한다고 생각했다. 또한, 다양한 클럽 활동, 부스 운영, 공연 등 축제의 주요 행사들에 대해 소개하고 싶었다.

이러한 생각에서 시작하여, 저는 모든 정보를 한눈에 볼 수 있는 중앙 집중식 플랫폼을 만들기로 결정했다. 그리고 이를 위해 가장 적합한 방법은 바로 **홈페이지 구축**이라고 판단하였다.

인터넷은 정보의 접근성을 극대화시켜주며 **실시간 업데이트가 가능**하게 해준다. 이러한 장점을 살려 학생들이 언제 어디서든 최신 축제 정보를 확인할 수 있도록 하기 위해 홈페이지 구축 작업에 착수하였다.

## 🙋‍♀️ 설치 및 구동
  **1.**  
  ```bash
  $ git clone https://github.com/zzangjyj0818/2023_Sangmyung_Festa_FE.git
  ``` 

  **2.** 
  ```bash 
  $ cd frontend
  ``` 

  **3.** 
  ``` 
  bash $ npm install
  ```
  **4.** 
  ```bash 
  $ npm start
  ```

## 🛠 프로젝트 설명

 - ### 1. 폴더 구조
   ```bash
      .
      ├── Project_Festival
      ├── ├─ .DS_Store
      ├── ├─ README.md
      ├── └─ frontend
      │   ├── ├─ package-lock.json
      │   ├── ├─ package.json
      │   ├── ├─ public
      │   ├── │  ├─ index.html
      │   ├── │  └─ manifest.json
      │   ├── ├─ src
      │   ├── │  ├─ .DS_Store
      │   ├── │  ├─ App.js
      │   ├── │  ├─ api
      │   ├── │  │  ├─ fetchAll.jsx
      │   ├── │  │  ├─ fetchBoxState.jsx
      │   ├── │  │  ├─ fetchCount.jsx
      │   ├── │  │  ├─ fetchDressCode.jsx
      │   ├── │  │  ├─ fetchTicket.jsx
      │   ├── │  │  ├─ postBoxState.jsx
      │   ├── │  │  ├─ postCount.jsx
      │   ├── │  │  ├─ postDressCode.jsx
      │   ├── │  │  ├─ postLogin.jsx
      │   ├── │  │  └─ postTicket.jsx
      │   ├── │  ├─ assets
      │   ├── │  │  ├─ .DS_Store
      │   ├── │  │  ├─ common
      │   ├── │  │  │  ├─ Footer.jsx
      │   ├── │  │  │  ├─ Header.jsx
      │   ├── │  │  │  └─ Menu.jsx
      │   ├── │  │  ├─ container
      │   ├── │  │  │  ├─ .DS_Store
      │   ├── │  │  │  ├─ AdminPage
      │   ├── │  │  │  │  ├─ AdminPageContainer.jsx
      │   ├── │  │  │  │  ├─ BoxChangeContainer.jsx
      │   ├── │  │  │  │  ├─ DressCodeChangeContainer.jsx
      │   ├── │  │  │  │  ├─ LoginModalContainer.jsx
      │   ├── │  │  │  │  └─ TicketChangeContainer.jsx
      │   ├── │  │  │  ├─ CreatorPage
      │   ├── │  │  │  │  ├─ CreatorListContainer.jsx
      │   ├── │  │  │  │  └─ dataSet.jsx
      │   ├── │  │  │  ├─ EventPage
      │   ├── │  │  │  │  ├─ DressCode.jsx
      │   ├── │  │  │  │  ├─ DressCodeContainer.jsx
      │   ├── │  │  │  │  ├─ EventCategoryContainer.jsx
      │   ├── │  │  │  │  ├─ SeatDrawContainer.jsx
      │   ├── │  │  │  │  ├─ TimerContainer.jsx
      │   ├── │  │  │  │  ├─ TreasureHunt.jsx
      │   ├── │  │  │  │  ├─ TreasureHuntContainer.jsx
      │   ├── │  │  │  │  └─ dataSet.jsx
      │   ├── │  │  │  ├─ InformationPage
      │   ├── │  │  │  │  ├─ DesignfcnContainer.jsx
      │   ├── │  │  │  │  ├─ DragContainer.jsx
      │   ├── │  │  │  │  ├─ Gatefcn.jsx
      │   ├── │  │  │  │  ├─ GatefcnContainer.jsx
      │   ├── │  │  │  │  ├─ InformationfcnContainer.jsx
      │   ├── │  │  │  │  ├─ SelectedTagContext.jsx
      │   ├── │  │  │  │  └─ data.jsx
      │   ├── │  │  │  ├─ MainPage
      │   ├── │  │  │  │  ├─ BoothViewContainer.jsx
      │   ├── │  │  │  │  ├─ CreatorBoxContainer.jsx
      │   ├── │  │  │  │  ├─ EventBoxContainer.jsx
      │   ├── │  │  │  │  ├─ MainViewContainer.jsx
      │   ├── │  │  │  │  ├─ NumberBoxContainer.jsx
      │   ├── │  │  │  │  ├─ TimelineViewContainer.jsx
      │   ├── │  │  │  │  └─ dataSet.jsx
      │   ├── │  │  │  ├─ TimelinePage
      │   ├── │  │  │  │  ├─ DetailTableContainer.jsx
      │   ├── │  │  │  │  ├─ InformationTextBox.jsx
      │   ├── │  │  │  │  ├─ SlideShowContainer.jsx
      │   ├── │  │  │  │  ├─ TableTypeContainer.jsx
      │   ├── │  │  │  │  └─ dataSet.jsx
      │   ├── │  │  │  └─ common
      │   ├── │  │  │     └─ HeaderContainer.jsx
      │   ├── │  │  └─ presentation
      │   ├── │  │     ├─ AdminPage
      │   ├── │  │     │  ├─ BoxChange.jsx
      │   ├── │  │     │  ├─ DressCodeChange.jsx
      │   ├── │  │     │  ├─ LoginModal.jsx
      │   ├── │  │     │  └─ TicketChange.jsx
      │   ├── │  │     ├─ CreatorPage
      │   ├── │  │     │  ├─ CreatorItem.jsx
      │   ├── │  │     │  └─ CreatorList.jsx
      │   ├── │  │     ├─ EventPage
      │   ├── │  │     │  ├─ DressCode.jsx
      │   ├── │  │     │  ├─ EventCategory.jsx
      │   ├── │  │     │  ├─ SeatDraw.jsx
      │   ├── │  │     │  ├─ SmungSlideShow.jsx
      │   ├── │  │     │  ├─ Timer.jsx
      │   ├── │  │     │  └─ TreasureHunt.jsx
      │   ├── │  │     ├─ InformationPage
      │   ├── │  │     │  ├─ Designfcn.jsx
      │   ├── │  │     │  ├─ Drag.jsx
      │   ├── │  │     │  ├─ Gatefcn.jsx
      │   ├── │  │     │  ├─ Informationfcn.jsx
      │   ├── │  │     │  └─ TagList.jsx
      │   ├── │  │     ├─ MainPage
      │   ├── │  │     │  ├─ BoothView.jsx
      │   ├── │  │     │  ├─ CreatorBox.jsx
      │   ├── │  │     │  ├─ CreatorView.jsx
      │   ├── │  │     │  ├─ EventBox.jsx
      │   ├── │  │     │  ├─ EventView.jsx
      │   ├── │  │     │  ├─ MainView.jsx
      │   ├── │  │     │  ├─ NumberBox.jsx
      │   ├── │  │     │  └─ TimelineView.jsx
      │   ├── │  │     └─ TimelinePage
      │   ├── │  │        ├─ Box.jsx
      │   ├── │  │        ├─ DetailPerformance.jsx
      │   ├── │  │        ├─ DetailTable.jsx
      │   ├── │  │        ├─ Events.jsx
      │   ├── │  │        ├─ SlideShow.jsx
      │   ├── │  │        └─ TableType.jsx
      │   ├── │  ├─ index.js
      │   ├── │  ├─ pages
      │   ├── │  │  ├─ AdminPage.jsx
      │   ├── │  │  ├─ CreatorPage.jsx
      │   ├── │  │  ├─ EventPage.jsx
      │   ├── │  │  ├─ InformationPage.jsx
      │   ├── │  │  ├─ MainPage.jsx
      │   ├── │  │  ├─ NotFoundPage.jsx
      │   ├── │  │  └─ TimelinePage.jsx
      │   ├── │  └─ styles
      │   ├── │     ├─ components
      │   ├── │     │  ├─ AdminPage
      │   ├── │     │  │  ├─ BoxChange.scss
      │   ├── │     │  │  ├─ DressCodeChange.scss
      │   ├── │     │  │  ├─ LoginModal.scss
      │   ├── │     │  │  └─ TicketChange.scss
      │   ├── │     │  ├─ CreatorPage
      │   ├── │     │  │  ├─ CreatorItem.scss
      │   ├── │     │  │  └─ CreatorList.scss
      │   ├── │     │  ├─ EventPage
      │   ├── │     │  │  ├─ DressCode.scss
      │   ├── │     │  │  ├─ EventCategory.scss
      │   ├── │     │  │  ├─ SeatDraw.scss
      │   ├── │     │  │  ├─ SmungSlideShow.scss
      │   ├── │     │  │  └─ TreasureHunt.scss
      │   ├── │     │  ├─ InformationPage
      │   ├── │     │  │  ├─ Designfcn.scss
      │   ├── │     │  │  ├─ Gatefcn.scss
      │   ├── │     │  │  ├─ drag.scss
      │   ├── │     │  │  └─ informationfcn.scss
      │   ├── │     │  ├─ MainPage
      │   ├── │     │  │  ├─ BoothView.scss
      │   ├── │     │  │  ├─ CreatorView.scss
      │   ├── │     │  │  ├─ EventView.scss
      │   ├── │     │  │  ├─ MainView.scss
      │   ├── │     │  │  ├─ NumberBox.scss
      │   ├── │     │  │  └─ TimelineView.scss
      │   ├── │     │  ├─ TimelinePage
      │   ├── │     │  │  ├─ Box.scss
      │   ├── │     │  │  ├─ DetailPerformance1.scss
      │   ├── │     │  │  ├─ DetailTable.scss
      │   ├── │     │  │  ├─ Events.scss
      │   ├── │     │  │  ├─ InformationTextBox.scss
      │   ├── │     │  │  ├─ SlideShow.scss
      │   ├── │     │  │  └─ TableType.scss
      │   ├── │     │  └─ common
      │   ├── │     │     ├─ Footer.scss
      │   ├── │     │     ├─ Header.scss
      │   ├── │     │     └─ Menu.scss
      │   ├── │     └─ pages
      │   ├── │        ├─ MainPage.scss
      │   ├── │        ├─ NotFoundPage.scss
      │   ├── │        └─ TimelinePage.scss
      │   └── └─ yarn.lock
      ├──

    ``` 
    <hr/>

    ### 2. 아키텍쳐
    위 Directory Tree를 참고하면, 크게 **assets, api, component, pages, styles**으로 구분지어서 폴더가 많아도, 페이지 별로 들어가는 파일들을 별도로 관리하였다.

    **assets** - 홈페이지에 들어가는 모든 이미지 파일들이 저장되어 있다.

    **api** - 누적 방문자 수, 이벤트 관련 정보들을 가져오거나 수정할 수 있는 비지니스 로직들이 구현되어져있다.
    
    **components** - 축제 일정은 날씨와 여러 요인에 의해 수시로 변경될 수 있다. Component를 **presentation과 container**로 나누어 시각적인 부분과 함수(데이터 포함)으로 나누어 개발을 진행하였다. 일정이 변경되거나 내용이 수정되는 경우 data.jsx를 수정하면 되서, **유지보수가 매우 용이했다는 장점**이 있었다.

    **pages** - 각 페이지에 필요한 컴포넌트들을 조합한 파일들이 존재한다.

    **styles** - 각 컴포넌트, 페이지에 관한 .scss 파일들이 저장되어져 있다.

    <hr/>

    ### 3. 기술 스택
     |Frontend|
     |:------:|
     |<img src="https://img.shields.io/badge/React-61DBFB?style=flat-square&logo=React&logoColor=white"/></a><br><img src="https://img.shields.io/badge/React Query-FF475A?style=flat-square&logo=React Query&logoColor=white"/></a><br><img src="https://img.shields.io/badge/JavaScript-F7DF1F?style=flat-square&logo=JavaScript&logoColor=white"/></a>|
     <hr/>

    ### 4. 상세 기술 사용 방법
    **API : Axios**

    **서버 데이터 관리 : React-Query**

    **라우터 설정 : react-router-dom**

    **CSS : SASS/SCSS**

    <hr/>

  
## 👍 느낀점
  개발하면서 느낀점을 총 3가지로 나누어 생각해봤다.
   
## 👑 만들이들
|이름|사진|담당역할|직책|
|:---:|:---:|:---:|:---:|:---:|
|[정연재](https://github.com/zzangjyj0818)|<img src="/frontend/src/assets/CreatorPage/jyj.webp" width="200" height="200"/>|부스 제외 모든 페이지 제작 / 최적화 및 유지보수|개발 총괄|
|[김지민](https://github.com/jm7033)|<img src="/frontend/src/assets/CreatorPage/kjm.webp" width="200" height="200"/>|메인/타임테이블/이벤트 페이지 제작|FE 팀원|
|[김승찬](https://github.com/kscold)|<img src="/frontend/src/assets/CreatorPage/ksc.webp" width="200" height="200"/>|부스 페이지 제작|FE 팀원|
|[임형준](https://github.com/hyeongjun6364)|<img src="/frontend/src/assets/CreatorPage/lhjun.webp" width="200" height="200"/>|부스 페이지 제작|FE 팀원|
