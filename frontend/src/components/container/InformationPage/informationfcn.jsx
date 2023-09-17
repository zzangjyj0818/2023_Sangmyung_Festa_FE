// src/components/container/InformationPage/informationfcn.jsx
import React, { useState, useEffect, lazy, Suspense } from "react"
import "./informationfcn.scss"
import Designfcn from "./Designfcn"
import Gatefcn from "./Gatefcn"
import { useSelectedTag } from "./SelectedTagContext"

const LazyDesignfcn = lazy(() => import("./Designfcn"));
const LazyGatefcn = lazy(() => import("./Gatefcn"));

const Informationfcn = () => {
  // const [activeNavButton, setActiveNavButton] = useState("design") // 페이지 접속 시 선택된 기본 버튼
  const { selectedTag, setSelectedTag, selectedComponent, updateSelectedTag } =
    useSelectedTag()

  const [menuInfo, setMenuInfo] = useState(true) //메뉴 상태관리 추가

  // useEffect(() => {
  //   // 로컬 스토리지에서 favorites 값을 읽어와서 해당 값이 없으면 "design"으로 설정
  //   const storedFavorites = JSON.parse(localStorage.getItem("favorites"))
  //   if (!storedFavorites || storedFavorites.length === 0) {
  //     // setActiveNavButton("design")
  //     setMenuInfo(true)
  //   }
  // }, [])

  const onClickSelButton = (buttonName) => {
    if (selectedTag === buttonName) {
      return
    }
    setSelectedTag((prev) => (prev === buttonName ? "design" : buttonName))
    // if (activeNavButton === buttonName) {
    //   return
    // }
    // setActiveNavButton((prev) => (prev === buttonName ? "design" : buttonName))
    // setMenuInfo(!menuInfo)

    updateSelectedTag(buttonName) // 선택된 태그 업데이트
    setMenuInfo(true) // 메뉴 상태 관리
  }

  // useEffect(() => {
  //   return (
  //     <DragInfo
  //       selectedTagId_out2={selectedTagId}
  //       onTouchStart={handleTouchStart}
  //       onTouchMove={handleTouchMove}
  //       onFavoriteChange={handleFavorite}
  //     />
  //   )
  // }, [updateSelectedTag])

  return (
    <div className="informaion-container">
      <div className="navigation-cp-container">
        <div className="navigation-cp-space">
          <div className="navigation-button">
            <button
              className={`navigation-cp ${selectedTag === "design" ? "active" : ""
                // selectedTagInfo.selectedTagId === "design" ? "active" : ""
                }`}
              onClick={() => onClickSelButton("design")}
            >
              학생회관
            </button>
            <div
              className={`border-bottom ${selectedTag === "design" ? "active" : ""
                // selectedTagInfo.selectedTagId === "design" ? "active" : ""
                }`}
            ></div>
          </div>

          <div className="navigation-button">
            <button
              className={`navigation-cp ${selectedTag === "gate" ? "active" : ""
                // selectedTagInfo.selectedTagId === "gate" ? "active" : ""
                }`}
              onClick={() => onClickSelButton("gate")}
            >
              도서관
            </button>
            <div
              className={`border-bottom ${selectedTag === "gate" ? "active" : ""
                // selectedTagInfo.selectedTagId === "gate" ? "active" : ""
                }`}
            ></div>
          </div>
        </div>
      </div>
      <div className="navigation-line" />
      <Suspense fallback={<div>Loading...</div>}>
        {selectedTag === "design" ? <LazyDesignfcn /> : <LazyGatefcn />}
      </Suspense>


    </div>
  )
}

export default Informationfcn
