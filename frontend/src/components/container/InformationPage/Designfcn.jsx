// src/components/container/InformationPage/Designfcn.jsx
import React, { useState, useEffect } from "react"
import { tagData, tagData_food } from "./data"
import "../../../styles/pages/designUniv.scss"
import Union from "../../container/InformationPage/designicon/Union.png"
import Smoke from "../../container/InformationPage/designicon/Smoke.png"
import ArrowUp from "./designicon/arrowup.png"
import ArrowDown from "./designicon/arrowdown.png"
import DragInfo from "./drag"
import "./drag.scss"
import "./informationfcn.scss"
import "./Designfcn.scss"

const TagList = ({ tags, onTagClick, selectedTagId }) => {
  return (
    // <div className="DesignUnivContainer">
    <div className="filter-tags">
      {tags.map((tag) => (
        <button
          key={tag.id}
          // className="tagDesignUniv"
          className={`tag-button ${selectedTagId === tag.id ? "active" : ""}`}
          onClick={() => onTagClick(tag.id)}
        >
          {tag.name}
        </button>
      ))}
    </div>
  )
}

function Designfcn() {
  const [selectedTagId, setSelectedTagId] = useState(null)
  const [selectedTagId_food, setSelectedTagId_food] = useState(null)
  // const [activeNavButton, setActiveNavButton] = useState("design") // 페이지 접속 시 선택된 기본 버튼
  // const [boothInfo, setBoothInfo] = useState("")
  const [showMajorTags, setShowMajorTags] = useState(false)
  const [favorites, setFavorites] = useState([]) // favorites state 추가

  const handleTagClick = (tagId) => {
    setSelectedTagId(tagId)
    setSelectedTagId_food(null) // 다른 태그 선택 시 해당 태그 초기화
  }

  const handleTagFood = (tagId) => {
    setSelectedTagId_food(tagId)
    setSelectedTagId(null) // 다른 태그 선택 시 해당 태그 초기화
  }

  const handleToggleTags = () => {
    setShowMajorTags((prevShowMajorTags) => !prevShowMajorTags)
  }

  const handleTouchStart = (e) => {
    e.preventDefault()
  }

  const handleTouchMove = (e) => {
    e.preventDefault()
  }

  //localstorage 값 불러오기 // 임형준
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || []
    setFavorites(storedFavorites)
  }, [favorites])

  // useEffect(() => {
  //   const storedSelectedTagId = localStorage.getItem("selectedTagId")
  //   const storedSelectedTagId_food = localStorage.getItem("selectedTagId_food")
  //   const storedHeart = JSON.parse(localStorage.getItem("heart"))

  //   if (storedSelectedTagId) {
  //     setSelectedTagId(Number(storedSelectedTagId)) // Assuming the expected type is number
  //   }

  //   if (storedSelectedTagId_food) {
  //     setSelectedFoodID(Number(storedSelectedTagId_food)) // Assuming the expected type is number
  //   }

  //   if (typeof storedHeart === "boolean") {
  //     setHeart(storedHeart)
  //   }
  // }, [])

  return (
    <div className="App">
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
      </div>

      <div
        className="filter-container"
        style={{ overflowX: "scroll", flexWrap: "nowrap" }}
      >
        <h2 className="filter-title">즐겨찾는 부스</h2>
        <div className="filter-favorite-tags">
          {favorites.length > 0 ? (
            favorites.map((favorite) => (
              <button className="favorite-tag-button" key={favorite}>
                {favorite}
              </button>
            ))
          ) : (
            <p className="DesignUnivFavorite">하트를 눌러 추가해주세요</p>
          )}
        </div>
      </div>

      <div className="filter-container">
        <div className="filter-title-container">
          <h2 className="filter-title">동아리/학과 부스</h2>
          <img
            src={showMajorTags ? ArrowDown : ArrowUp}
            alt="이미지"
            onClick={handleToggleTags}
            style={{ marginBottom: "12px", paddingLeft: "10px" }}
          />
        </div>
        {showMajorTags ? (
          <TagList
            tags={tagData}
            onTagClick={handleTagClick}
            selectedTagId={selectedTagId}
          />
        ) : (
          <TagList
            tags={tagData.slice(0, 8)}
            onTagClick={handleTagClick}
            selectedTagId={selectedTagId}
          />
        )}
      </div>

      <div className="filter-container">
        <h2 className="filter-title">외부 부스</h2>
        <TagList
          tags={tagData_food}
          onTagClick={handleTagFood}
          selectedTagId={selectedTagId_food}
        />
      </div>

      <div className="filter-container">
        <h2 className="filter-title">푸드트럭</h2>
        <TagList
          tags={tagData_food}
          onTagClick={handleTagFood}
          selectedTagId={selectedTagId_food}
        />
      </div>
      <DragInfo
        selectedTagId={selectedTagId}
        selectedTagId_food={selectedTagId_food}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      />
    </div>
  )
}

export default Designfcn
