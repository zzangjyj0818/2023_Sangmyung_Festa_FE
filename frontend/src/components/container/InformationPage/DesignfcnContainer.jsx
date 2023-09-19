import React, { useState, useEffect} from "react"
import { tagData, tagData_food, tagData_Out } from "./data"
import { useSelectedTag } from "./SelectedTagContext"
import Designfcn from "../../presentation/InformationPage/Designfcn"

function DesignfcnContainer() {
  const [selectedTagId, setSelectedTagId] = useState(null)
  const [selectedTagId_out, setSelectedTagId_out] = useState(null)
  const [selectedTagId_food, setSelectedTagId_food] = useState(null)
  const { updateSelectedTag } = useSelectedTag()

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
    if (selectedTagId === tagId) {
      setSelectedTagId(null);
    }
    else {
      setSelectedTagId(tagId)
      setSelectedTagId_food(null)
      setSelectedTagId_out(null)
    }
  }

  const handleTagOut = (tagId) => {
    if (selectedTagId_out === tagId) {
      setSelectedTagId_out(null);
    }
    else {
      setSelectedTagId_out(tagId)
      setSelectedTagId(null)
      setSelectedTagId_food(null)

    }
  }

  const handleTagFood = (tagId) => {
    if (selectedTagId_food === tagId) {
      setSelectedTagId_food(null);
    }
    else {
      setSelectedTagId_food(tagId)
      setSelectedTagId(null)
      setSelectedTagId_out(null)

    }
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
    <Designfcn 
      selectedTagId={selectedTagId}
      selectedTagId_food={selectedTagId_food}
      selectedTagId_out={selectedTagId_out}
      favorites={favorites}
      tagData={tagData}
      tagData_Out={tagData_Out}
      tagData_food={tagData_food}
      setSelectedTagId={setSelectedTagId}
      setSelectedTagId_out={setSelectedTagId_out}
      setSelectedTagId_food={setSelectedTagId_food}
      updateSelectedTag={updateSelectedTag}
      showMajorTags={showMajorTags}
      handleToggleTags={handleToggleTags}
      handleTagClick={handleTagClick}
      handleTagOut={handleTagOut}
      handleTagFood={handleTagFood}
      handleTouchStart={handleTouchStart}
      handleTouchMove={handleTouchMove}
      handleFavorite={handleFavorite}
    />
  )
}

export default DesignfcnContainer;
