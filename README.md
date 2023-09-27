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

    ### 3. 개발 환경
     개발 환경은 **React**, **SCSS** 사용하였다.
     <hr/>

    ### 4. 상세 기술 스택
    **API : Axios**

    **서버 데이터 관리 : React-Query**

    **라우터 설정 : react-router-dom**

    **CSS : SASS/SCSS**

    <hr/>

  
## 👍 느낀점
  개발하면서 느낀점을 총 3가지로 나누어 생각해봤다.
  - ### 1. 개발
    나는 프로젝트를 할 때마다 새로운 기술을 적용해보는 것을 두려워하지 않는다. FrontEnd는 코드의 유통기한이 짧을 뿐만 아니라 트렌디한 기술이 자주 바뀌어 이에 적응해야하기 때문에, 더더욱 새로운 기술에 대해 두려워하지 않는 것 같다.
    새로운 기술을 적용하다보니 참고할 레퍼런스도 많지 않았고, 레퍼런스가 존재한다 해도 자세한 설명은 나와있지 않았기에 엄청 고생했던 것 같다.

    새로 적용한 기술 중 제일 기억에 남는 것은 단언컨대 React-Query라고 말할 수 있을 것 같다. React-Query의 존재를 모르고 있었을 때는 Redux를 통하여 서버로 부터 받아오는 데이터 상태 관리를 진행하였으나, React-Query는 자동으로 상태 관리를 해주니, 코드의 간소화를 몸으로 직접 체감할 수 있었고, 개발 속도를 더욱 끌어 올릴 수 있었다.

    버전 관리는 깃허브에서 진행되었다. 깃에서 각 인원에 대한 브랜치를 만든 후, 버전 관리를 진행하였고, 전체 버전 관리는 오로지 나에 의해 진행되었다. 버전 관리를 이번 프로젝트에서 처음 해보았는데, 너무나 편리했다. 기존에는 버전 관리 하는 방법만 알 뿐, 실제로 해보지 않아서 다른 사람으로부터 파일을 카톡으로 받아서 직접 merge 했다....

    이번에 빌드 용량을 줄이기 위한 최적화에 엄청 노력했다. 노력한만큼 엄청 고생했다. 최적화를 하면서 배운 것은 이미지가 은근 빌드 용량을 늘려, 리소스의 크기를 증가시킬 뿐만 아니라 렌더링 속도까지 저하시킨다는 사실을 깨달아 이미지를 전부 .webp 확장자로 바꾸어 28Mb 였던 빌드 용량을 8Mb까지 줄였다.
    추가로, 개발자 도구에서  lighthouse를 통하여 페이지 성능 측정을 할 때, 정의해놓고 사용하지 않는 CSS가 생각보다 렌더링 속도를 저하시킨다는 사실을 알았다. 

- ### 2. 협업
  협업은 진짜 힘든 것 같다. 기획은 축제 시작 4일전까지 수시로 변경되었고, 변경된 기획안을 바탕으로 디자인은 다시 수정되었다. 디자인이 수정되었다는 말은 즉, 프론트엔드가 끝났던 일을 다시 해야한다는 의미이다. 다 만들어 놓은 상태로 디자인 수정에 엄청 시간을 쏟아부었던 것 같았다.

  또한, 백엔드와의 관게는 썩 좋지 않았다. 갈등 상황이라고 말하기보다는 9월 10일까지 API 명세서와 백엔드 로직 구현 완성이 목표였지만, 이 2개를 9월 10일이 아닌 9월 15일날 전달받았고, 프론트엔드 개발은 잠시 중단 됐었다. 5일을 통째로 날려서 축제 전까지 부랴부랴 개발을 했던 기억이 난다. (목서버도 프론트엔드에서 만듬...)

- ### 3. 정리
  나는 이번 축제때 놀지 못했다. 결국, 비가 와서 타임테이블이 언제, 어떻게 변경되는지 알 수 없어서 도서관에서 인프라를 담당했던 형과 함께 계속 대기하였고, 변경된 일정표를 받으면 즉시 수정하여 재배포 하였다.
  
  프로젝트 하면서 번아웃이 딱 2번 왔었다. 첫 번째는 첫 배포 한 날, 두 번째는 축제가 끝난 저녁에 집가는 길이였다.
  첫 번째 번아웃이 온 날에는 첫 배포를 한 날이였기도 하였고, 내가 홈페이지 제작이 아닌 해커톤에 나가야하는 일정이 잡혀있었다. 해커톤의 개발 기간은 넉넉히 2주였고, 축제 홈페이지 제작으로 인해서 2주동안 해커톤에 신경쓰지 못하고, 해커톤 당일날 밤을 새면서 만들었다. 내 영혼까지 끌어다가 만들었고, 해커톤이 끝나고, 축제 홈페이지가 배포되었다는 이야기를 듣고 너무나 힘들고 허무했었다. 그래도, 해커톤에서 수상을 해서 금방 원래대로 돌아왔다.

  두 번째 번아웃은 축제가 끝난 저녁에 집 가는길이였다. 프로젝트를 같이 했던 사람들은 쉬거나 축제를 보러갔는데, 나는 혼자서 도서관에 박혀서 프로젝트 때문에 밀린 공부도 하고, 홈페이지 변경 사항이 생기면 즉시 수정하냐고 하루종일 도서관에 있었던 걸 떠올리니 너무나 허무했고, 너무나 우울했다. 삶을 살아가면서 역대급 번아웃이였던 같았다. 이 번아웃때문에 심리 상담도 받고 왔었을정도이니.... 

  번아웃이 2번이나 왔었지만, 나는 그래도 행복하다. 여러 사람들이 우리가 만든 축제 홈페이지를 매우 유용하게 사용해주었고, 홈페이지를 만들면서 개발에 관한 팁, 기술에 관한 숙련도가 확실히 올라갔다는 것을 느끼고 한편으로는 좋았다. 

  내년에도 다른 사람들과 협업하며 축제 홈페이지를 만들고 싶다는 생각이 들었다...
   
## 👑 만들이들
|이름|사진|학과|직책|담당역할|
|:---:|:---:|:---:|:---:|:---:|
|정연재|<img src="/frontend/src/assets/common/Logo1.png"/>|중앙정렬|중앙정렬|중앙정렬|
|김승찬|오른쪽정렬|중앙정렬|중앙정렬|중앙정렬|
|임형준|오른쪽정렬|중앙정렬|중앙정렬|중앙정렬|
|김지민|오른쪽정렬|중앙정렬|중앙정렬|중앙정렬|
