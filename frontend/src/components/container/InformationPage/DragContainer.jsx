import React, { useState, useRef, useEffect } from "react"
import { tagData, infoData, tagData_food, infoData_food, tagData_Out, tagData_Out2, infoData_Out } from "./data"
import Drag from "../../presentation/InformationPage/Drag"

function DragContainer({
  selectedTagId,
  selectedTagId_food,
  selectedTagId_out,
  selectedTagId_out2,
  onFavoriteChange,
}) {
  // const [miniWindowOpen, setMiniWindowOpen] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffsetY, setDragOffsetY] = useState(0)
  const miniWindowRef = useRef(null)
  const [favorites, setFavorites] = useState([])
  const minDragHeight = 100; // 최소 높이
  const maxDragHeight = window.innerHeight-100; // 최대 높이
  
  
  const handleHeart = () => {
    const selectedTagName =
      tagData.find((tag) => tag.id === selectedTagId)?.name ||
      tagData_Out.find((tag) => tag.id === selectedTagId_out)?.name ||
      tagData_food.find((tag) => tag.id === selectedTagId_food)?.name ||
      tagData_Out2.find((tag) => tag.id === selectedTagId_out2)?.name ||
      ""

    if (selectedTagName) {
      let updatedFavorites

      if (favorites.includes(selectedTagName)) {
        updatedFavorites = favorites.filter(
          (favorite) => favorite !== selectedTagName
        )
      } else {
        updatedFavorites = [...favorites, selectedTagName]
      }

      setFavorites(updatedFavorites)

      // 즐겨찾기를 로컬 스토리지에 저장
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites))

      onFavoriteChange(selectedTagName)
    }
  }

  

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || []
   
    setFavorites(storedFavorites)
    
  }, [])

  const handleMouseDown = (e) => {
    setIsDragging(true)
    const rect = miniWindowRef.current.getBoundingClientRect()
    setDragOffsetY(e.clientY - rect.top)
  }

  const handleTouchStart = (e) => {
    setIsDragging(true)
    const touch = e.touches[0]
    const rect = miniWindowRef.current.getBoundingClientRect()
    setDragOffsetY(touch.clientY - rect.top)
  }

  const handleMouseMove = (e) => {
    if (isDragging) {
      const newY = e.clientY - dragOffsetY;
      // 최소 높이와 최대 높이 사이에 높이를 제한
      miniWindowRef.current.style.top = `${Math.max(
        minDragHeight,
        Math.min(maxDragHeight, newY)
      )}px`;
    }
  };
  
  const handleTouchMove = (e) => {
    if (isDragging) {
      const touch = e.touches[0];
      const newY = touch.clientY - dragOffsetY;
      // 최소 높이와 최대 높이 사이에 높이를 제한
      miniWindowRef.current.style.top = `${Math.max(
        minDragHeight,
        Math.min(maxDragHeight, newY)
      )}px`;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  // 디자인대학 부스 태그
  const selectedTagContent = selectedTagId
    ? tagData.find((tag) => tag.id === selectedTagId)?.name
    : ""

  // 디자인 대학 푸드트럭 태그
  const selectedTagFoodContent = selectedTagId_food
    ? tagData_food.find((tag) => tag.id === selectedTagId_food)?.name
    : ""

  // 외부 부스 태그
  const selectedTagOutContent = selectedTagId_out
    ? tagData_Out.find((tag) => tag.id === selectedTagId_out)?.name
    : ""

  const selectedTagOutContent2 = selectedTagId_out2
    ? tagData_Out2.find((tag) => tag.id === selectedTagId_out2)?.name
    : ""
  // 학과 부스 시간

  // 디자인 대학
  const selectedTagInfo = selectedTagId
    ? infoData.find((tag) => tag.id === selectedTagId)?.content
    : ""

  //  디자인 대학 게임(외부 부스) 시간
  const selectedTagGame = selectedTagId
    ? infoData.find((tag) => tag.id === selectedTagId)?.Game
    : ""
    // 디자인 대학 게임 내용
  const selectedTagExplain = selectedTagId
    ? infoData.find((tag) => tag.id === selectedTagId)?.explain
    : ""
  // 푸드트럭 시간
  const selectedTagFoodInfo = selectedTagId_food
    ? infoData_food.find((tag) => tag.id === selectedTagId_food)?.content
    : ""
  //푸드트럭 내용
  const selectedTagFoodExplain = selectedTagId_food
    ? infoData_food.find((tag) => tag.id === selectedTagId_food)?.explain
    : ""
  //푸드트럭 가격
  const selectedTagFoodGame = selectedTagId_food
    ? infoData_food.find((tag) => tag.id === selectedTagId_food)?.Game
    : ""

  // 외부 부스 시간
  const selectedTagOutInfo = selectedTagId_out
    ? infoData_Out.find((tag) => tag.id === selectedTagId_out)?.content
    : ""
  // 외부 부스 내용
  const selectedTagOutExplain = selectedTagId_out
    ? infoData_Out.find((tag) => tag.id === selectedTagId_out)?.explain
    : ""
  // 외부 부스 가격
  const selectedTagOutGame = selectedTagId_out
    ? infoData_Out.find((tag) => tag.id === selectedTagId_out)?.Game
    : ""
  return (
    <Drag 
      miniWindowRef={miniWindowRef}
      handleMouseDown={handleMouseDown}
      handleTouchStart={handleTouchStart}
      handleMouseMove={handleMouseMove}
      handleTouchMove={handleTouchMove}
      handleMouseUp={handleMouseUp}
      handleTouchEnd={handleTouchEnd}
      selectedTagContent={selectedTagContent}
      favorites={favorites}
      handleHeart={handleHeart}
      selectedTagInfo={selectedTagInfo}
      selectedTagGame={selectedTagGame}
      selectedTagExplain={selectedTagExplain}
      selectedTagFoodContent={selectedTagFoodContent}
      selectedTagFoodExplain={selectedTagFoodExplain}
      selectedTagFoodInfo={selectedTagFoodInfo}
      selectedTagOutContent={selectedTagOutContent}
      selectedTagOutExplain={selectedTagOutExplain}
      selectedTagOutInfo={selectedTagOutInfo}
      selectedTagOutGame={selectedTagOutGame}
      selectedTagFoodGame={selectedTagFoodGame}
      selectedTagOutContent2={selectedTagOutContent2}
    />
  )
}

export default DragContainer;
