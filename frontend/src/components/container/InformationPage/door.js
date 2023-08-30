// src/components/container/InformationPage/door.js
import React, { useState } from "react"
import image from "./image.png"
import "./door.scss"
import Header from "../../common/Header"
import tags from "./tags.json"

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
    <>
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
      </div>
    </>
  )
}

export default Door
