// src/components/container/InformationPage/Gatefcn.jsx
import React, { useState } from "react"
import gatetags from "./gatetags.json"
import foodtrucks from "./foodtruck.json"
import DragInfo from "./drag" // DragInfo import
// scss 임포트
import "./informationfcn.scss"
import "./Gatefcn.scss"

const GateFcn = ({ selectedTag, onClickTag }) => {
  const [activeBooth, setActiveBooth] = useState(null)
  const [selectedTagId, setSelectedTagId] = useState(null) // selectedTagId 추가

  const handleClick = (name, id) => {
    onClickTag(name)
    setActiveBooth(id)
    setSelectedTagId(id)
  }

  return (
    <>
      <div className="image-size">
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

        <div className="gate-booth foodbooth">
          <span className="building-name">푸드트럭</span>
        </div>

        {gatetags.map((tag) => (
          <div
            key={tag.id}
            className={`gate-booth booth${tag.id} ${
              activeBooth === tag.id ? "active" : ""
            }`}
          />
        ))}
      </div>

      <div className="filter-container">
        <h2 className="filter-title">동아리/학과 부스</h2>

        <div className="filter-tags">
          {gatetags.map((tag) => (
            <button
              key={tag.id}
              className={`tag-button ${
                selectedTag.includes(tag.Department) ? "active" : ""
              }`}
              onClick={() => handleClick(tag.Department, tag.id)}
            >
              {tag.Department}
            </button>
          ))}
        </div>
      </div>
      <DragInfo selectedTagId={selectedTagId} />

      <div className="filter-container">
        <h2 className="filter-title">푸트트럭</h2>

        <div className="filter-tags">
          {foodtrucks.map((truck) => (
            <button
              key={truck.id}
              className={`tag-button ${
                selectedTag.includes(truck.name) ? "active" : ""
              }`}
              onClick={() => handleClick(truck.name, truck.id)}
            >
              {truck.name}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}

export default GateFcn
