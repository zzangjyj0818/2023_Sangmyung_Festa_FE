// src/components/container/InformationPage/informationfcn.jsx
import React, { useState, useEffect, lazy, Suspense } from "react"
import "./informationfcn.scss"
import Designfcn from "./Designfcn"
import Gatefcn from "./Gatefcn"
import { useSelectedTag } from "./SelectedTagContext"

const LazyDesignfcn = lazy(() => import("./Designfcn"));
const LazyGatefcn = lazy(() => import("./Gatefcn"));

const Informationfcn = () => {
  const { selectedTag, setSelectedTag, selectedComponent, updateSelectedTag } =
    useSelectedTag()

  const [menuInfo, setMenuInfo] = useState(true) //메뉴 상태관리 추가

  const onClickSelButton = (buttonName) => {
    if (selectedTag === buttonName) {
      return
    }
    setSelectedTag((prev) => (prev === buttonName ? "design" : buttonName))

    updateSelectedTag(buttonName) // 선택된 태그 업데이트
    setMenuInfo(true) // 메뉴 상태 관리
  }

  return (
    <div className="informaion-container">
      <div className="navigation-cp-container">
        <div className="navigation-cp-space">
          <div className="navigation-button">
            <button
              className={`navigation-cp ${
                selectedTag === "design" ? "active" : ""
              }`}
              onClick={() => onClickSelButton("design")}
            >
              학생회관
            </button>
            <div
              className={`border-bottom ${
                selectedTag === "design" ? "active" : ""
              }`}
            ></div>
          </div>

          <div className="navigation-button">
            <button
              className={`navigation-cp ${
                selectedTag === "gate" ? "active" : ""
              }`}
              onClick={() => onClickSelButton("gate")}
            >
              도서관
            </button>
            <div
              className={`border-bottom ${
                selectedTag === "gate" ? "active" : ""
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
