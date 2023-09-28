// src/components/container/InformationPage/Gatefcn.jsx
import React, { useState, useEffect} from "react"
import Gatefcn from "../../presentation/InformationPage/Gatefcn"
import { tagData_Out2 } from "./data"
import { useSelectedTag } from "./SelectedTagContext"

function GateFcnContainer() {
  const [selectedTagId, setSelectedTagId] = useState(null)
  const [favorites, setFavorites] = useState([]) // favorites state 추가
  const { updateSelectedTag, setNotMatchingTag } =
    useSelectedTag()

  const handleFavorite = (selectedTagContent) => {
    if (favorites.includes(selectedTagContent)) {
      setFavorites((prevFavorites) =>
        prevFavorites.filter((favorite) => favorite !== selectedTagContent)
      )
    } else {
      setFavorites((prevFavorites) => [...prevFavorites, selectedTagContent])
    }
  }

  const handleTagClick = (tagId, tagName) => {
    if (selectedTagId === tagId) {
      setSelectedTagId(null)
    }
    else {
      setSelectedTagId(tagId)
    }

    // updateSelectedTag(tagName, "design") // 선택된 태그 정보 및 컴포넌트 이름 업데이트
  }

  const handleTouchStart = (e) => {
    e.preventDefault()
  }

  const handleTouchMove = (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === "favorites") {
        setFavorites(JSON.parse(e.newValue))
      }
    }

    window.addEventListener("storage", handleStorageChange)

    return () => {
      window.removeEventListener("storage", handleStorageChange)
    }
  }, [])

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || []
    setFavorites(storedFavorites)
  }, [])

  return (
    <Gatefcn 
      selectedTagId={selectedTagId}
      favorites={favorites} 
      tagData_Out2={tagData_Out2}
      setSelectedTagId={setSelectedTagId}
      setNotMatchingTag={setNotMatchingTag}
      updateSelectedTag={updateSelectedTag}
      handleTagClick={handleTagClick}
      handleTouchStart={handleTouchStart}
      handleTouchMove={handleTouchMove}
      handleFavorite={handleFavorite}
    />
  )
}

export default GateFcnContainer;
