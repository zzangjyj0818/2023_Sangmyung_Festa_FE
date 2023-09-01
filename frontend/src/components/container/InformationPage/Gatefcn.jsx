// src/components/container/InformationPage/Gatefcn.jsx
import React from "react"
import tags from "./tags.json"
import "./informationfcn.scss"
import "./Gatefcn.scss"

const GateFcn = ({ selectedTag, onClickTag }) => {
  return (
    <>
      <div className="image-size">
        {/* <img src={image} alt="이미지" /> */}
        <div className="gate-image1">
          <span className="building-name">충전소</span>
        </div>

        <div className="gate-image2">
          <span className="building-name">계단</span>
        </div>

        <div className="gate-image3">
          <span className="building-name">도서관</span>
        </div>

        <div className="gate-image4">
          <span className="building-name">FREE ZONE</span>
        </div>

        <div className="gate-image5">
          <span className="building-name">분수</span>
        </div>

        <div className="gate-booth booth1">
          <span className="building-name">푸드트럭</span>
        </div>

        {Array.from({ length: 6 }, (_, i) => (
          <div key={(i = 1)} className={`gate-booth booth${i + 1}`} />
        ))}

        {/* <div className="overlay-div-container gate">
          {tags.map((tag) => (
            <div key={tag.id} onClick={() => onClickTag(tag.Department)} />
          ))}
        </div> */}
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
