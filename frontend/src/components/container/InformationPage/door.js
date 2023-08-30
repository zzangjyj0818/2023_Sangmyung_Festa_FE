// src/components/container/InformationPage/door.js
import React, { useState } from "react"
import image from "./image.png"
import "./door.scss"
import tags from "./tags.json"
import timeicon from "./carbon_time.png"
import infoicon from "./Vector.png"

const Door = () => {
  const [selectedTag, setSelectedTag] = useState("")
  const [activeNavButton, setActiveNavButton] = useState(null)

  const onClickTag = (tag) => {
    setSelectedTag((prevTags) => {
      if (prevTags.includes(tag)) {
        return prevTags.filter((t) => t !== tag)
      } else {
        return [tag]
      }
    })
  }

  const onClickSelButton = (buttonName) => {
    setActiveNavButton((prev) => (prev === buttonName ? null : buttonName))
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
        <div className="image-size">
          <img src={image} alt="이미지" />
          <div className="overlay-div-container">
            <div
              className={`tag-div1 ${
                selectedTag.includes("인터스트리디자인") ? "active" : ""
              }`}
            />

            <div
              className={`tag-div2 ${
                selectedTag.includes("소프트웨어") ? "active" : ""
              }`}
            />

            <div
              className={`tag-div3 ${
                selectedTag.includes("팜므") ? "active" : ""
              }`}
            />

            <div
              className={`tag-div4 ${
                selectedTag.includes("스페이스디자인") ? "active" : ""
              }`}
            />

            <div
              className={`tag-div5 ${
                selectedTag.includes("마음건강연구회") ? "active" : ""
              }`}
            />

            <div
              className={`tag-div6 ${
                selectedTag.includes("그린스마트시티") ? "active" : ""
              }`}
            />

            <div
              className={`tag-div7 ${
                selectedTag.includes("시스템반도체") ? "active" : ""
              }`}
            />

            <div
              className={`tag-div8 ${
                selectedTag.includes("단과대") ? "active" : ""
              }`}
            />

            <div
              className={`tag-div9 ${
                selectedTag.includes("무대미술") ? "active" : ""
              }`}
            />

            <div
              className={`tag-div10 ${
                selectedTag.includes("식물식품공학") ? "active" : ""
              }`}
            />

            <div
              className={`tag-div11 ${
                selectedTag.includes("세라믹디자인") ? "active" : ""
              }`}
            />
          </div>
        </div>

        <div className="filter-container">
          <h2 className="filter-title">동아리/학과 부스</h2>
          <div className="filter-tags">
            {tags.map((tag) => (
              <button
                key={tag}
                className={`tag-button ${
                  selectedTag.includes(tag) ? "active" : ""
                }`}
                onClick={() => onClickTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="timeline-container">
          <div className="timeline-title">
            <div className="timeline-icon">
              <img src={timeicon} alt="시계 아이콘" />
            </div>
            <h2 className="timeline-icon-font">시간</h2>
            <h2 className="timeline-time">10:00 ~ 20:00</h2>
          </div>
          <div className="timeline-component">
            <div className="timeline-body" />
            <div className="timeline-icon">
              <img src={timeicon} alt="시계 아이콘" />
            </div>
            <h2 className="timeline-cp-title">게임 및 사진촬영</h2>
            <h2 className="timeline-cp-cost">1,000원 / 10발</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Door
