// src/components/container/InformationPage/Designfcn.jsx
import React from "react"
import tags from "./disgintags.json"
import "./informationfcn.scss"
import "./Designfcn.scss"
import Union from "./designicon/Union.png"
import Smoke from "./designicon/Smoke.png"

const Designfcn = ({ selectedTag, onClickTag }) => {
  return (
    <>
      <div className="image-size">
        {/* <img src={image} alt="이미지" /> */}
        <div className="image1">
          <span className="building-name">소나무숲</span>
        </div>
        <div className="image2">
          <img src={Union} alt="학생회관" />
          <span className="building-name">학생회관</span>
        </div>
        <div className="image3">
          <img src={Smoke} alt="흡연장" />
          <span className="building-name">흡연장</span>
        </div>

        <div className="image4">
          {"푸드트럭A".split("").map((char, index) => (
            <span key={index} className="building-name">
              {char}
            </span>
          ))}
        </div>

        <div className="image5">
          <span className="building-name">FREE ZONE</span>
        </div>

        <div className="image6">
          {"푸드트럭B".split("").map((char, index) => (
            <span key={index} className="building-name">
              {char}
            </span>
          ))}
        </div>

        <div className="image7">
          <span className="building-name">운동장</span>
        </div>

        {Array.from({ length: 13 }, (_, i) => (
          <div key={i} className={`booth booth${i + 1}`} />
        ))}

        {/* <div className="overlay-div-container design">
          {tags.map((tag) => (
            <div
              key={tag.id}
              className={`tag-div${tag.id} ${
                selectedTag.includes(tag.Department) ? "active" : "" // 배열과 직접비교를 할 수 없으므로 배열안데 특정 학과이름이 들어있는지 확인
              }`}
              onClick={() => onClickTag(tag.Department)}
            />
          ))}
        </div> */}
      </div>

      <div className="filter-container">
        <div className="filter-title-container">
          <h2 className="filter-title">동아리/학과 부스</h2>
          <h2 className="filter-expand">&#62;</h2>
        </div>

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
    </>
  )
}

export default Designfcn
