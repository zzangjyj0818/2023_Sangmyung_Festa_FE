// src/components/container/InformationPage/informationfcn.jsx
import React, { useState } from "react"
import "./informationfcn.scss"
import booth from "./booth.json"
import timeicon from "./designicon//carbon_time.png"
import infoicon from "./designicon//Vector.png"
import Designfcn from "./Designfcn"
import Gatefcn from "./Gatefcn"

const Informationfcn = () => {
  const [selectedTag, setSelectedTag] = useState("")
  const [activeNavButton, setActiveNavButton] = useState("design") // 페이지 접속 시 선택된 기본 버튼
  const [boothInfo, setBoothInfo] = useState("")

  const onClickTag = (tag) => {
    setSelectedTag((prevTags) => {
      if (prevTags.includes(tag)) {
        return prevTags.filter((t) => t !== tag)
      } else {
        return [tag]
      }
    })

    setBoothInfo(tag) // 선택된 태그에 해당하는 부스 정보 설정
  }

  const onClickSelButton = (buttonName) => {
    setActiveNavButton((prev) => (prev === buttonName ? "design" : buttonName))
    setSelectedTag("") // 버튼을 누를 때마다 선택된 태그 초기화
    setBoothInfo("") // 버튼을 누를 때마다 선택된 태그와 부스 정보 초기화
  }

  return (
    <div className="informaion-container">
      <div className="navigation-cp-container">
        <div className="navigation-cp-space">
          <div className="navigation-button">
            <button
              className={`navigation-cp ${
                activeNavButton === "design" ? "active" : ""
              }`}
              onClick={() => onClickSelButton("design")}
            >
              디자인대학
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
              정문
            </button>
            <div
              className={`border-bottom ${
                activeNavButton === "gate" ? "active" : ""
              }`}
            ></div>
          </div>
        </div>
      </div>

      {/* 네비게이션 라인 */}
      <div className="navigation-line" />

      <div className="body-container">
        {/* 디자인대학 / 정문 이미지 렌더링 부분 */}
        {activeNavButton === "design" && (
          <Designfcn selectedTag={selectedTag} onClickTag={onClickTag} />
        )}

        {activeNavButton === "gate" && (
          <Gatefcn selectedTag={selectedTag} onClickTag={onClickTag} />
        )}

        {/* 타임라인 컴포넌트 수정예정 */}
        <div className="timeline-container">
          <div className="timeline-title">
            <div className="timeline-timeicon">
              <img src={timeicon} alt="시계 아이콘" />
            </div>
            <h2 className="timeline-icon-font">시간</h2>
            <h2 className="timeline-time">10:00 ~ 20:00</h2>
          </div>
          {boothInfo && (
            <div className="timeline-component">
              {booth.map(
                (item) =>
                  item.Department === boothInfo && (
                    <React.Fragment key={item.id}>
                      <div className="timeline-body" />
                      <div className="timeline-info-title">
                        <div className="timeline-infoicon">
                          <img src={infoicon} alt="정보 아이콘" />
                        </div>
                        <div className="timeline-info-text">정보</div>
                        <h2 className="timeline-info-content">{item.name}</h2>
                      </div>
                      <h2 className="timeline-cp-cost">{item.cost}</h2>
                    </React.Fragment>
                  )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Informationfcn
