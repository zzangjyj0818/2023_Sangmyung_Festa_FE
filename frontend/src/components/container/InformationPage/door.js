// src/components/container/InformationPage/door.js
import React, { useState, Fragment } from "react"
import image from "./image.png"
import "./door.scss"
import tags from "./tags.json"
import booth from "./booth.json"
import timeicon from "./carbon_time.png"
import infoicon from "./Vector.png"

const Door = () => {
  const [selectedTag, setSelectedTag] = useState("")
  const [activeNavButton, setActiveNavButton] = useState("design")
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
          <button
            className={`navigation-cp ${
              activeNavButton === "design" ? "active" : ""
            }`}
            onClick={() => onClickSelButton("design")}
          >
            디자인대학
          </button>
          <button
            className={`navigation-cp ${
              activeNavButton === "gate" ? "active" : ""
            }`}
            onClick={() => onClickSelButton("gate")}
          >
            정문
          </button>
        </div>
      </div>

      <div className="navigation-line" />

      <div className="body-container">
        {activeNavButton === "gate" && (
          <div className="image-size">
            <img src={image} alt="이미지" />
            <div className="overlay-div-container">
              {/* 태그별로 활성화 여부 확인 후 클래스 적용 */}
              {tags.map((tag) => (
                <div
                  key={tag.id}
                  className={`tag-div${tag.id} ${
                    selectedTag.includes(tag.Department) ? "active" : ""
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        <div className="filter-container">
          <h2 className="filter-title">동아리/학과 부스</h2>
          <div className="filter-tags">
            {tags.map((tag) => (
              <button
                key={tag.id}
                className={`tag-button ${
                  selectedTag.includes(tag.Department) ? "active" : ""
                }`}
                onClick={() => onClickTag(tag.Department)}
              >
                {tag.Department}
              </button>
            ))}
          </div>
        </div>

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

export default Door
