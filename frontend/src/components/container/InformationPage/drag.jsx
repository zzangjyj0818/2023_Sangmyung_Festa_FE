// import React, { useState, useRef, useEffect } from "react"
// import "./drag.scss"
// import {
//   tagData,
//   infoData,
//   tagData_food,
//   infoData_food,
//   tagData_Out,
//   tagData_Out2,
//   infoData_Out,
// } from "./data"
// import Time from "./designicon/carbon_time.png"
// import EmptyHeart from "./designicon/Heart.png"
// import FilledHeart from "./designicon/Heart2.png"
// import Line from "./designicon/Line 5.png"
// import LinkImage from "./designicon/Link_2.png"

// function DragInfo({
//   selectedTagId,
//   selectedTagId_food,
//   selectedTagId_out,
//   selectedTagId_out2,
//   onFavoriteChange,
// }) {
//   // const [miniWindowOpen, setMiniWindowOpen] = useState(false)
//   const [isDragging, setIsDragging] = useState(false)
//   const [dragOffsetY, setDragOffsetY] = useState(0)
//   const miniWindowRef = useRef(null)
//   const [favorites, setFavorites] = useState([])
//   // const [favorites2, setFavorites2] = useState([])

//   const handleHeart = () => {
//     const selectedTagName =
//       tagData.find((tag) => tag.id === selectedTagId)?.name ||
//       tagData_Out.find((tag) => tag.id === selectedTagId_out)?.name ||
//       tagData_food.find((tag) => tag.id === selectedTagId_food)?.name ||
//       tagData_Out2.find((tag) => tag.id === selectedTagId_out2)?.name ||
//       ""

//     if (selectedTagName) {
//       let updatedFavorites

//       if (favorites.includes(selectedTagName)) {
//         updatedFavorites = favorites.filter(
//           (favorite) => favorite !== selectedTagName
//         )
//       } else {
//         updatedFavorites = [...favorites, selectedTagName]
//       }

//       setFavorites(updatedFavorites)

//       // 즐겨찾기를 로컬 스토리지에 저장
//       localStorage.setItem("favorites", JSON.stringify(updatedFavorites))

//       onFavoriteChange(selectedTagName)
//     }
//   }

//   // const handleHeart2 = () => {
//   //   const selectedTagName =
//   //     tagData_Out2.find((tag) => tag.id === selectedTagId_out2)?.name || ""

//   //   if (selectedTagName) {
//   //     let updatedFavorites
//   //     if (favorites2.includes(selectedTagName)) {
//   //       updatedFavorites = favorites2.filter(
//   //         (favorite) => favorite !== selectedTagName
//   //       )
//   //     } else {
//   //       updatedFavorites = [...favorites2, selectedTagName]
//   //     }

//   //     setFavorites2(updatedFavorites)

//   //     // 즐겨찾기를 로컬 스토리지에 저장
//   //     localStorage.setItem("favorites2", JSON.stringify(updatedFavorites))

//   //     onFavoriteChange(selectedTagName)
//   //   }
//   // }

//   useEffect(() => {
//     const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || []
//     // const storedFavorites2 =
//     //   JSON.parse(localStorage.getItem("favorites2")) || []

//     setFavorites(storedFavorites)
//     // setFavorites2(storedFavorites2)
//   }, [])

//   const handleMouseDown = (e) => {
//     setIsDragging(true)
//     const rect = miniWindowRef.current.getBoundingClientRect()
//     setDragOffsetY(e.clientY - rect.top)
//   }

//   const handleTouchStart = (e) => {
//     setIsDragging(true)
//     const touch = e.touches[0]
//     const rect = miniWindowRef.current.getBoundingClientRect()
//     setDragOffsetY(touch.clientY - rect.top)
//   }

//   const handleMouseMove = (e) => {
//     if (isDragging) {
//       const newY = e.clientY - dragOffsetY
//       miniWindowRef.current.style.top = `${newY}px`
//     }
//   }

//   const handleTouchMove = (e) => {
//     if (isDragging) {
//       const touch = e.touches[0]
//       const newY = touch.clientY - dragOffsetY
//       miniWindowRef.current.style.top = `${newY}px`
//     }
//   }

//   const handleMouseUp = () => {
//     setIsDragging(false)
//   }

//   const handleTouchEnd = () => {
//     setIsDragging(false)
//   }

//   // 디자인대학 부스 태그
//   const selectedTagContent = selectedTagId
//     ? tagData.find((tag) => tag.id === selectedTagId)?.name
//     : ""

//   // 디자인 대학 푸드트럭 태그
//   const selectedTagFoodContent = selectedTagId_food
//     ? tagData_food.find((tag) => tag.id === selectedTagId_food)?.name
//     : ""

//   // 외부 부스 태그
//   const selectedTagOutContent = selectedTagId_out
//     ? tagData_Out.find((tag) => tag.id === selectedTagId_out)?.name
//     : ""

//   const selectedTagOutContent2 = selectedTagId_out2
//     ? tagData_Out2.find((tag) => tag.id === selectedTagId_out2)?.name
//     : ""
//   // 학과 부스 시간

//   // 디자인 대학
//   const selectedTagInfo = selectedTagId
//     ? infoData.find((tag) => tag.id === selectedTagId)?.content
//     : ""

//   //  디자인 대학 게임(외부 부스) 시간
//   const selectedTagGame = selectedTagId
//     ? infoData.find((tag) => tag.id === selectedTagId)?.Game
//     : ""

//   // 푸드트럭 시간
//   const selectedTagFoodInfo = selectedTagId_food
//     ? infoData_food.find((tag) => tag.id === selectedTagId_food)?.content
//     : ""

//   // 외부 부스 시간
//   const selectedTagOutInfo = selectedTagId_out
//     ? infoData_Out.find((tag) => tag.id === selectedTagId_out)?.Game
//     : ""

//   return (
//     <div>
//       <div
//         ref={miniWindowRef}
//         className={"mini-window-container"}
//         onMouseDown={handleMouseDown}
//         onTouchStart={handleTouchStart}
//         onMouseMove={handleMouseMove}
//         onTouchMove={handleTouchMove}
//         onMouseUp={handleMouseUp}
//         onTouchEnd={handleTouchEnd}
//         style={{ left: "0" }} // 수평 이동 막음
//       >
//         <div className="mini-window-content">
//           {selectedTagContent && (
//             <div>
//               <div style={{ textAlign: "center", marginBottom: "20px" }}>
//                 <img src={Line} alt="Line" />
//               </div>

//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "space-between",
//                 }}
//               >
//                 <div className="mini-window-Title">{selectedTagContent}</div>
//                 <img
//                   src={
//                     favorites.includes(selectedTagContent)
//                       ? FilledHeart
//                       : EmptyHeart
//                   }
//                   alt="emptyheart"
//                   onClick={() => handleHeart(selectedTagContent)}
//                 />
//               </div>

//               <div style={{ display: "flex", alignItems: "center" }}>
//                 <img
//                   src={Time}
//                   alt="time"
//                   style={{ width: "14px", height: "14px", marginRight: "8px" }}
//                 />
//                 <div className="mini-window-Time"> 시간 </div>
//                 <div className="mini-window-TimeInfo">{selectedTagInfo}</div>
//               </div>

//               <div className="mini-window-TimeInfo">학과부스설명</div>
//               <div className="mini-window-TimeInfo">학과부스설명</div>
//               <img src={LinkImage} alt="Link" />

//               <hr />
//               <div style={{ display: "flex", alignItems: "center" }}>
//                 <div className="mini-window-GameImage"> 게임사진 및 촬영 </div>
//                 <div style={{ flex: 1, textAlign: "right" }}>
//                   {selectedTagGame}{" "}
//                 </div>
//               </div>
//               <hr />
//             </div>
//           )}

//           {selectedTagFoodContent && (
//             <div>
//               <div style={{ textAlign: "center", marginBottom: "20px" }}>
//                 <img src={Line} alt="Line" />
//               </div>

//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "space-between",
//                 }}
//               >
//                 <div className="mini-window-Title">
//                   {selectedTagFoodContent}
//                 </div>
//                 <img
//                   src={
//                     favorites.includes(selectedTagFoodContent)
//                       ? FilledHeart
//                       : EmptyHeart
//                   }
//                   alt="emptyheart"
//                   onClick={() => handleHeart(selectedTagFoodContent)}
//                 />
//               </div>

//               <div style={{ display: "flex", alignItems: "center" }}>
//                 <img
//                   src={Time}
//                   alt="time"
//                   style={{ width: "14px", height: "14px", marginRight: "8px" }}
//                 />
//                 <div className="mini-window-Time"> 시간 </div>
//                 <div className="mini-window-TimeInfo">
//                   {selectedTagFoodInfo}
//                 </div>
//               </div>

//               <div className="mini-window-TimeInfo">학과부스설명</div>
//               <div className="mini-window-TimeInfo">학과부스설명</div>
//               <img src={LinkImage} alt="Link" />

//               <hr />
//               <div style={{ display: "flex", alignItems: "center" }}>
//                 <div className="mini-window-GameImage"> 게임사진 및 촬영 </div>
//                 <div style={{ flex: 1, textAlign: "right" }}>
//                   {selectedTagGame}{" "}
//                 </div>
//               </div>
//               <hr />
//             </div>
//           )}

//           {selectedTagOutContent && (
//             <div>
//               <div style={{ textAlign: "center", marginBottom: "20px" }}>
//                 <img src={Line} alt="Line" />
//               </div>

//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "space-between",
//                 }}
//               >
//                 <div className="mini-window-Title">{selectedTagOutContent}</div>
//                 <img
//                   src={
//                     favorites.includes(selectedTagOutContent)
//                       ? FilledHeart
//                       : EmptyHeart
//                   }
//                   alt="emptyheart"
//                   onClick={() => handleHeart(selectedTagOutContent)}
//                 />
//               </div>

//               <div style={{ display: "flex", alignItems: "center" }}>
//                 <img
//                   src={Time}
//                   alt="time"
//                   style={{ width: "14px", height: "14px", marginRight: "8px" }}
//                 />
//                 <div className="mini-window-Time"> 시간 </div>
//                 <div className="mini-window-TimeInfo">{selectedTagOutInfo}</div>
//               </div>

//               <div className="mini-window-TimeInfo">학과부스설명</div>
//               <div className="mini-window-TimeInfo">학과부스설명</div>
//               <img src={LinkImage} alt="Link" />

//               <hr />
//               <div style={{ display: "flex", alignItems: "center" }}>
//                 <div className="mini-window-GameImage"> 게임사진 및 촬영 </div>
//                 <div style={{ flex: 1, textAlign: "right" }}>
//                   {selectedTagGame}{" "}
//                 </div>
//               </div>
//               <hr />
//             </div>
//           )}

//           {selectedTagOutContent2 && (
//             <div>
//               <div style={{ textAlign: "center", marginBottom: "20px" }}>
//                 <img src={Line} alt="Line" />
//               </div>

//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "space-between",
//                 }}
//               >
//                 <div className="mini-window-Title">
//                   {selectedTagOutContent2}
//                 </div>
//                 <img
//                   src={
//                     favorites.includes(selectedTagOutContent2)
//                       ? FilledHeart
//                       : EmptyHeart
//                   }
//                   alt="emptyheart"
//                   onClick={() => handleHeart(selectedTagOutContent2)}
//                 />
//               </div>

//               <div style={{ display: "flex", alignItems: "center" }}>
//                 <img
//                   src={Time}
//                   alt="time"
//                   style={{ width: "14px", height: "14px", marginRight: "8px" }}
//                 />
//                 <div className="mini-window-Time"> 시간 </div>
//                 <div className="mini-window-TimeInfo">
//                   {selectedTagFoodInfo}
//                 </div>
//               </div>

//               <div className="mini-window-TimeInfo">학과부스설명</div>
//               <div className="mini-window-TimeInfo">학과부스설명</div>
//               <img src={LinkImage} alt="Link" />

//               <hr />
//               <div style={{ display: "flex", alignItems: "center" }}>
//                 <div className="mini-window-GameImage"> 게임사진 및 촬영 </div>
//                 <div style={{ flex: 1, textAlign: "right" }}>
//                   {selectedTagGame}
//                 </div>
//               </div>
//               <hr />
//             </div>
//           )}
//         </div>
//         {/* <div className="mini-window-toggle" onClick={toggleMiniWindow}>
//           {miniWindowOpen ? '닫기' : '열기'}
//         </div> */}
//       </div>
//     </div>
//   )
// }

// export default DragInfo

import React, { useState, useRef, useEffect } from "react"
import "./drag.scss"
import Time from "./designicon/carbon_time.png"
import EmptyHeart from "./designicon/Heart.png"
import FilledHeart from "./designicon/Heart2.png"
import Line from "./designicon/Line 5.png"
import LinkImage from "./designicon/Link_2.png"

function DragInfo({
  selectedTagId,
  onFavoriteChange,
  tagData,
  tagData_food,
  tagData_Out,
  tagData_Out2,
  infoData,
  infoData_food,
  infoData_Out,
  infoData_Out2,
}) {
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffsetY, setDragOffsetY] = useState(0)
  const miniWindowRef = useRef(null)
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || []
    setFavorites(storedFavorites)
  }, [])

  const getTagData = (selectedTagId, tagArray) => {
    if (!tagArray) return "" // 추가: 배열이 없는 경우 빈 문자열 반환
    const tag = tagArray.find((tag) => tag.id === selectedTagId)
    return tag ? tag.name : ""
  }

  const getTagInfo = (selectedTagId, infoArray) => {
    if (!infoArray) return "" // 추가: 배열이 없는 경우 빈 문자열 반환
    const info = infoArray.find((tag) => tag.id === selectedTagId)
    return info ? info.content : ""
  }

  const handleHeartClick = (tagName) => {
    const updatedFavorites = favorites.includes(tagName)
      ? favorites.filter((favorite) => favorite !== tagName)
      : [...favorites, tagName]

    setFavorites(updatedFavorites)
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites))
    onFavoriteChange(tagName)
  }

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
      const newY = e.clientY - dragOffsetY
      miniWindowRef.current.style.top = `${newY}px`
    }
  }

  const handleTouchMove = (e) => {
    if (isDragging) {
      const touch = e.touches[0]
      const newY = touch.clientY - dragOffsetY
      miniWindowRef.current.style.top = `${newY}px`
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  const selectedTagName = selectedTagId
    ? getTagData(selectedTagId, tagData) ||
      getTagData(selectedTagId, tagData_Out) ||
      getTagData(selectedTagId, tagData_food) ||
      getTagData(selectedTagId, tagData_Out2)
    : ""

  const selectedTagInfo = selectedTagId
    ? getTagInfo(selectedTagId, infoData) ||
      getTagInfo(selectedTagId, infoData_Out) ||
      getTagInfo(selectedTagId, infoData_food) ||
      getTagInfo(selectedTagId, infoData_Out2)
    : ""

  return (
    <div>
      <div
        ref={miniWindowRef}
        className={"mini-window-container"}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseUp={handleMouseUp}
        onTouchEnd={handleTouchEnd}
        style={{ left: "0" }}
      >
        <div className="mini-window-content">
          {selectedTagName && (
            <div>
              <div style={{ textAlign: "center", marginBottom: "20px" }}>
                <img src={Line} alt="Line" />
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div className="mini-window-Title">{selectedTagName}</div>
                <img
                  src={
                    favorites.includes(selectedTagName)
                      ? FilledHeart
                      : EmptyHeart
                  }
                  alt="emptyheart"
                  onClick={() => handleHeartClick(selectedTagName)}
                />
              </div>

              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={Time}
                  alt="time"
                  style={{ width: "14px", height: "14px", marginRight: "8px" }}
                />
                <div className="mini-window-Time"> 시간 </div>
                <div className="mini-window-TimeInfo">{selectedTagInfo}</div>
              </div>

              <div className="mini-window-TimeInfo">학과부스설명</div>
              <div className="mini-window-TimeInfo">학과부스설명</div>
              <img src={LinkImage} alt="Link" />

              <hr />
              <div style={{ display: "flex", alignItems: "center" }}>
                <div className="mini-window-GameImage"> 게임사진 및 촬영 </div>
                <div style={{ flex: 1, textAlign: "right" }}>
                  {selectedTagInfo}
                </div>
              </div>
              <hr />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DragInfo
