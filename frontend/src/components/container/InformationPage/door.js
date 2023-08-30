// src/components/container/InformationPage/door.js
import React, { useState } from "react"
import image from "./image.png"
import "./door.scss" // 상대 경로를 명시하고 .scss 확장자를 붙이지 않음
import Header from "../../common/Header"

const Door = () => {
  const [selectedTags, setSelectedTags] = useState([])
  const tags = ["인터스트리디자인", "소프트웨어", "수학", "과학"] // 하드코딩한 태그 리스트

  const onClickTag = (tag) => {
    setSelectedTags((prevTags) => {
      if (prevTags.includes(tag)) {
        return prevTags.filter((t) => t !== tag)
      } else if (prevTags.length < 3) {
        return [...prevTags, tag]
      } else {
        return [tag, ...prevTags.slice(0, 2)]
      }
    })
  }

  return (
    <>
      <Header />
      <div>
        <div className="image-size">
          <img
            src={image}
            alt="이미지"
            style={{
              width: "363px",
              height: "175px",
            }}
          />
        </div>

        <div className="filter-tags">
          {tags.map((tag) => (
            <button
              key={tag}
              className={`tag-button ${
                selectedTags.includes(tag) ? "active" : ""
              }`}
              onClick={() => onClickTag(tag)}
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}

export default Door
