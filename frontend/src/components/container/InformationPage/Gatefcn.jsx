// src/components/container/InformationPage/Gatefcn.jsx
import React, { useState, useEffect } from "react"
import DragInfo from "./drag" // DragInfo import
import { tagData2, tagData_food2 } from "./data"
// scss 임포트
import "./informationfcn.scss"
import "./Gatefcn.scss"

const TagList = ({ tags, onTagClick, selectedTagId }) => {
  return (
    <div className="filter-tags">
      {tags.map((tag) => (
        <button
          key={tag.id}
          className={`tag-button ${selectedTagId === tag.id ? "active" : ""}`}
          onClick={() => onTagClick(tag.id)}
        >
          {tag.name}
        </button>
      ))}
    </div>
  )
}

function GateFcn() {
  const [selectedTagId, setSelectedTagId] = useState(null)
  const [selectedTagId_food, setSelectedTagId_food] = useState(null)
  const [showMajorTags, setShowMajorTags] = useState(false)
  const [favorites, setFavorites] = useState([]) // favorites state 추가

  const handleFavorite = (selectedTagContent) => {
    if (favorites.includes(selectedTagContent)) {
      setFavorites((prevFavorites) =>
        prevFavorites.filter((favorite) => favorite !== selectedTagContent)
      )
    } else {
      setFavorites((prevFavorites) => [...prevFavorites, selectedTagContent])
    }
  }

  const handleTagClick = (tagId) => {
    setSelectedTagId(tagId)
    setSelectedTagId_food(null)
  }

  const handleTagFood = (tagId) => {
    setSelectedTagId_food(tagId)
    setSelectedTagId(null)
  }

  const handleTouchStart = (e) => {
    e.preventDefault()
  }

  const handleTouchMove = (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === "favorites2") {
        setFavorites(JSON.parse(e.newValue))
      }
    }

    window.addEventListener("storage", handleStorageChange)

    return () => {
      window.removeEventListener("storage", handleStorageChange)
    }
  }, [])

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites2")) || []
    setFavorites(storedFavorites)
  }, [])

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
            selectedTagId_food ? "active" : ""
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

      <div className="filters-layout-container">
        <div
          className="filter-container"
          style={{ overflowX: "scroll", flexWrap: "nowrap" }}
        >
          <h2 className="filter-title">즐겨찾는 부스</h2>
          <div className="filter-favorite-tags">
            {favorites.length > 0 ? (
              favorites.map((favorite) => (
                <button
                  className="favorite-tag-button"
                  key={favorite}
                  onClick={() => {
                    // 일치하는 tagData 아이템 찾기
                    const matchingTag = tagData2.find(
                      (tag) => tag.name === favorite
                    )
                    if (matchingTag) {
                      setSelectedTagId(matchingTag.id)
                      setSelectedTagId_food(null) // 다른 태그 선택 시 해당 태그 초기화
                    } else {
                      // 일치하는 tagData_food 아이템 찾기
                      const matchingFoodTag = tagData_food2.find(
                        (tag) => tag.name === favorite
                      )
                      if (matchingFoodTag) {
                        setSelectedTagId_food(matchingFoodTag.id)
                        setSelectedTagId(null) // 다른 태그 선택 시 해당 태그 초기화
                      }
                    }
                  }}
                >
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
          </div>
          {showMajorTags ? (
            <TagList
              tags={tagData2}
              onTagClick={handleTagClick}
              selectedTagId={selectedTagId}
            />
          ) : (
            <TagList
              tags={tagData2.slice(0, 8)}
              onTagClick={handleTagClick}
              selectedTagId={selectedTagId}
            />
          )}
        </div>

        <div className="filter-container">
          <h2 className="filter-title">푸드트럭</h2>
          <TagList
            tags={tagData_food2}
            onTagClick={handleTagFood}
            selectedTagId={selectedTagId_food}
          />
        </div>
      </div>

      <DragInfo
        selectedTagId2={selectedTagId}
        selectedTagId_food2={selectedTagId_food}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onFavoriteChange={handleFavorite}
      />
    </>
  )
}

export default GateFcn
