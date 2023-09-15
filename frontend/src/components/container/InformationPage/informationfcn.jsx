// src/components/container/InformationPage/informationfcn.jsx
import React, { useState } from "react"
import "./informationfcn.scss"
import Designfcn from "./Designfcn"
import Gatefcn from "./Gatefcn"

const Informationfcn = () => {
  const [activeNavButton, setActiveNavButton] = useState("design") // 페이지 접속 시 선택된 기본 버튼
  const [menuInfo, setMenuInfo] = useState(true) //메뉴 상태관리 추가

  // const onClickTag = (tag) => {
  //   setSelectedTag((prevTags) => {
  //     if (prevTags.includes(tag)) {
  //       return prevTags.filter((t) => t !== tag)
  //     } else {
  //       return [tag]
  //     }
  //   })

  //   setBoothInfo(tag) // 선택된 태그에 해당하는 부스 정보 설정
  // }

  const onClickSelButton = (buttonName) => {
    if (activeNavButton === buttonName) {
      return
    }
    setActiveNavButton((prev) => (prev === buttonName ? "design" : buttonName))
    setMenuInfo(!menuInfo)
  }

  return (
    <div className="informaion-container">
      <div className="navigation-cp-container">
        <div className="navigation-cp-space">
          <div className="navigation-button">
            <button
              to="/design"
              className={`navigation-cp ${
                activeNavButton === "design" ? "active" : ""
              }`}
              onClick={() => onClickSelButton("design")}
            >
              학생회관
            </button>
            <div
              className={`border-bottom ${
                activeNavButton === "design" ? "active" : ""
              }`}
            ></div>
          </div>

          <div className="navigation-button">
            <button
              className={`navigation-cp ${
                activeNavButton === "gate" ? "active" : ""
              }`}
              onClick={() => onClickSelButton("gate")}
            >
              도서관
            </button>
            <div
              className={`border-bottom ${
                activeNavButton === "gate" ? "active" : ""
              }`}
            ></div>
          </div>
        </div>
      </div>
      <div className="navigation-line" />
      {menuInfo ? <Designfcn /> : <Gatefcn />}
    </div>
  )
}

export default Informationfcn
