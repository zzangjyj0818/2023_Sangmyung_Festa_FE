// src/components/container/InformationPage/Gatefcn.jsx
import React, { useState } from "react"
import DragInfo from "./drag" // DragInfo import
import { tagData_food, tagData2 } from "./data"
// scss 임포트
import "./informationfcn.scss"
import "./Gatefcn.scss"

const GateFcn = ({ onClickTag }) => {
  const [selectedTagId, setSelectedTagId] = useState(null)
  const [selectedFoodTruckId, setSelectedFoodTruckId] = useState(null) // 추가

  const handleClick = (name, id) => {
    onClickTag(name)

    setSelectedTagId(id)
    setSelectedFoodTruckId(null) // 다른 태그 선택 시 해당 태그 초기화
  }

  const handleFoodTruckClick = (name, id) => {
    onClickTag(name)
    setSelectedFoodTruckId(id)
    setSelectedTagId(null) // 다른 태그 선택 시 해당 태그 초기화
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

        <div
          className={`gate-booth foodbooth ${
            selectedFoodTruckId ? "active" : ""
          }`}
        >
          <span className="building-name">푸드트럭</span>
        </div>

        {tagData2.map((tag) => (
          <div
            key={tag.id}
            className={`gate-booth booth${tag.id} ${
              selectedTagId === tag.id ? "active" : ""
            }`}
          />
        ))}
      </div>

      <div className="filter-container">
        <h2 className="filter-title">동아리/학과 부스</h2>

        <div className="filter-tags">
          {tagData2.map((tag) => (
            <button
              key={tag.id}
              className={`tag-button ${
                selectedTagId === tag.id ? "active" : ""
              }`}
              onClick={() => handleClick(tag.name, tag.id)}
            >
              {tag.name}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-container">
        <h2 className="filter-title">푸트트럭</h2>

        <div className="filter-tags">
          {tagData_food.map((truck) => (
            <button
              key={truck.id}
              className={`tag-button ${
                selectedFoodTruckId === truck.id ? "active" : ""
              }`}
              onClick={() => handleFoodTruckClick(truck.name, truck.id)}
            >
              {truck.name}
            </button>
          ))}
        </div>
      </div>

      <DragInfo
        selectedTagId2={selectedTagId}
        selectedTagId_food={selectedFoodTruckId}
      />
    </>
  )
}

export default GateFcn
