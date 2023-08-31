// src/components/container/InformationPage/Gatefcn.jsx
import React from "react"
import image from "./image.png"
import tags from "./tags.json"
import "./informationfcn.scss"

const GateFcn = ({ selectedTag, onClickTag }) => {
  return (
    <>
      <div className="image-size">
        <img src={image} alt="이미지" />

        <div className="overlay-div-container gate">
          {tags.map((tag) => (
            <div
              key={tag.id}
              className={`tag-div${tag.id} ${
                selectedTag.includes(tag.Department) ? "active" : "" // 배열과 직접비교를 할 수 없으므로 배열안데 특정 학과이름이 들어있는지 확인
              }`}
              onClick={() => onClickTag(tag.Department)}
            />
          ))}
        </div>
      </div>

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
    </>
  )
}

export default GateFcn
