// // src/components/container/InformationPage/Designfcn.jsx
// import React, { useState, useEffect } from "react"
// import {
//   tagData,
//   infoData,
//   tagData_food,
//   infoData_food,
//   tagData_Out,
// } from "./data"
// import Union from "../../container/InformationPage/designicon/Union.png"
// import Smoke from "../../container/InformationPage/designicon/Smoke.png"
// import ArrowUp from "./designicon/arrowup.png"
// import ArrowDown from "./designicon/arrowdown.png"
// import DragInfo from "./drag"
// import "./drag.scss"
// import "./informationfcn.scss"
// import "./Designfcn.scss"
// import { useSelectedTag } from "./SelectedTagContext"

// const TagList = ({ tags, onTagClick, selectedTagId }) => {
//   return (
//     <div className="filter-tags">
//       {tags.map((tag) => (
//         <button
//           key={tag.id}
//           className={`tag-button ${selectedTagId === tag.id ? "active" : ""}`}
//           onClick={() => onTagClick(tag.id)}
//         >
//           {tag.name}
//         </button>
//       ))}
//     </div>
//   )
// }

// function Designfcn() {
//   const [selectedTagId, setSelectedTagId] = useState(null)
//   const [selectedTagId_out, setSelectedTagId_out] = useState(null)
//   const [selectedTagId_food, setSelectedTagId_food] = useState(null)
//   const [showMajorTags, setShowMajorTags] = useState(false)
//   const [favorites, setFavorites] = useState([]) // favorites state 추가
//   const { updateSelectedTag } = useSelectedTag()

//   const handleFavorite = (selectedTagContent) => {
//     if (favorites.includes(selectedTagContent)) {
//       setFavorites((prevFavorites) =>
//         prevFavorites.filter((favorite) => favorite !== selectedTagContent)
//       )
//     } else {
//       setFavorites((prevFavorites) => [...prevFavorites, selectedTagContent])
//     }
//   }

//   const handleTagClick = (tagId, tagType) => {
//     setSelectedTagId(tagId)
//     setSelectedTagId_food(null)
//     setSelectedTagId_out(null)
//     // updateSelectedTag(tagName, "Designfcn") // 선택된 태그 정보 및 컴포넌트 이름 업데이트
//   }

//   const handleTagOut = (tagId) => {
//     setSelectedTagId_out(tagId)
//     setSelectedTagId(null)
//     setSelectedTagId_food(null)
//   }

//   const handleTagFood = (tagId) => {
//     setSelectedTagId_food(tagId)
//     setSelectedTagId(null)
//     setSelectedTagId_out(null)
//   }

//   const handleToggleTags = () => {
//     setShowMajorTags((prevShowMajorTags) => !prevShowMajorTags)
//   }

//   const handleTouchStart = (e) => {
//     e.preventDefault()
//   }

//   const handleTouchMove = (e) => {
//     e.preventDefault()
//   }

//   useEffect(() => {
//     const handleStorageChange = (e) => {
//       if (e.key === "favorites") {
//         setFavorites(JSON.parse(e.newValue))
//       }
//     }

//     window.addEventListener("storage", handleStorageChange)

//     return () => {
//       window.removeEventListener("storage", handleStorageChange)
//     }
//   }, [])

//   useEffect(() => {
//     const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || []
//     setFavorites(storedFavorites)
//   }, [])

//   return (
//     <>
//       <div className="image-size">
//         <div className="image1">
//           <span className="building-name">소나무숲</span>
//         </div>
//         <div className="image2">
//           <img src={Union} alt="학생회관" />
//           <span className="building-name">학생회관</span>
//         </div>
//         <div className="image3">
//           <img src={Smoke} alt="흡연장" />
//           <span className="building-name">흡연장</span>
//         </div>

//         <div className="image4">
//           {"푸드트럭A".split("").map((char, index) => (
//             <span key={index} className="building-name">
//               {char}
//             </span>
//           ))}
//         </div>

//         <div className="image5">
//           <span className="building-name">FREE ZONE</span>
//         </div>

//         <div className="image6">
//           {"푸드트럭B".split("").map((char, index) => (
//             <span key={index} className="building-name">
//               {char}
//             </span>
//           ))}
//         </div>

//         <div className="image7">
//           <span className="building-name">운동장</span>
//         </div>

//         {Array.from({ length: 25 }, (_, i) => (
//           <div key={i} className={`booth booth${i + 1}`} />
//         ))}
//       </div>

//       <div className="filters-layout-container">
//         <div
//           className="filter-container"
//           style={{ overflowX: "scroll", flexWrap: "nowrap" }}
//         >
//           <h2 className="filter-title">즐겨찾는 부스</h2>
//           <div className="filter-favorite-tags">
//             {favorites.length > 0 ? (
//               favorites.map((favorite) => (
//                 <button
//                   className="favorite-tag-button"
//                   key={favorite}
//                   onClick={() => {
//                     // 일치하는 tagData 아이템 찾기
//                     const matchingTag = tagData.find(
//                       (tag) => tag.name === favorite
//                     )
//                     const matchingOutTag = tagData_Out.find(
//                       (tag) => tag.name === favorite
//                     )
//                     const matchingFoodTag = tagData_food.find(
//                       (tag) => tag.name === favorite
//                     )

//                     if (matchingTag) {
//                       setSelectedTagId(matchingTag.id)
//                       setSelectedTagId_out(null)
//                       setSelectedTagId_food(null)
//                     } else if (matchingOutTag) {
//                       setSelectedTagId_out(matchingOutTag.id)
//                       setSelectedTagId(null)
//                       setSelectedTagId_food(null)
//                     } else if (matchingFoodTag) {
//                       setSelectedTagId_food(matchingFoodTag.id)
//                       setSelectedTagId(null)
//                       setSelectedTagId_out(null)
//                     } else {
//                       updateSelectedTag("gate")
//                     }
//                   }}
//                 >
//                   {favorite}
//                 </button>
//               ))
//             ) : (
//               <p className="DesignUnivFavorite">하트를 눌러 추가해주세요</p>
//             )}
//           </div>
//         </div>

//         <div className="filter-container">
//           <div className="filter-title-container">
//             <h2 className="filter-title">동아리/학과 부스</h2>
//             <img
//               src={showMajorTags ? ArrowDown : ArrowUp}
//               alt="이미지"
//               onClick={handleToggleTags}
//               style={{ marginBottom: "12px", paddingLeft: "10px" }}
//             />
//           </div>
//           {showMajorTags ? (
//             <TagList
//               tags={tagData}
//               onTagClick={handleTagClick}
//               selectedTagId={selectedTagId}
//             />
//           ) : (
//             <TagList
//               tags={tagData.slice(0, 8)}
//               onTagClick={handleTagClick}
//               selectedTagId={selectedTagId}
//             />
//           )}
//         </div>

//         <div className="filter-container">
//           <h2 className="filter-title">외부 부스</h2>
//           <TagList
//             tags={tagData_Out}
//             onTagClick={handleTagOut}
//             selectedTagId={selectedTagId_out}
//           />
//         </div>

//         <div className="filter-container">
//           <h2 className="filter-title">푸드트럭</h2>
//           <TagList
//             tags={tagData_food}
//             onTagClick={handleTagFood}
//             selectedTagId={selectedTagId_food}
//           />
//         </div>
//       </div>
//       <DragInfo
//         selectedTagId={selectedTagId}
//         // selectedTagId_out={selectedTagId_out}
//         // selectedTagId_food={selectedTagId_food}

//         onTouchStart={handleTouchStart}
//         onTouchMove={handleTouchMove}
//         onFavoriteChange={handleFavorite}
//       />
//     </>
//   )
// }

// export default Designfcn

// src/components/container/InformationPage/Designfcn.jsx
import React, { useState, useEffect } from "react"
import {
  tagData,
  infoData,
  tagData_food,
  infoData_food,
  tagData_Out,
  
} from "./data"
import Union from "../../container/InformationPage/designicon/Union.png"
import Smoke from "../../container/InformationPage/designicon/Smoke.png"
import ArrowUp from "./designicon/addUp.png"
import ArrowDown from "./designicon/addDown.png"
import DragInfo from "./drag"
import "./drag.scss"
import "./informationfcn.scss"
import "./Designfcn.scss"
import { useSelectedTag } from "./SelectedTagContext"

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

function Designfcn() {
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
    setSelectedTagId(tagId)
    setSelectedTagId_food(null)
    setSelectedTagId_out(null)
    
  }

  const handleTagOut = (tagId) => {
    setSelectedTagId_out(tagId)
    setSelectedTagId(null)
    setSelectedTagId_food(null)
    
  }

  const handleTagFood = (tagId) => {
    setSelectedTagId_food(tagId)
    setSelectedTagId(null)
    setSelectedTagId_out(null)
    
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
    <>
      <div className="image-size">
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

        <div className={`image4 ${
            selectedTagId_food==3 ? "active" : "" || selectedTagId_food==4 ? "active" : ""
          }` }>
        <span className="building-name">푸드<br/>트럭 </span>
        </div>

        <div className="image5">
          <span className="building-name">FREE ZONE</span>
        </div>

        <div
          className={`image6 ${
            selectedTagId_food == 7
              ? "active"
              : "" || selectedTagId_food == 8
              ? "active"
              : "" || selectedTagId_food == 5
              ? "active"
              : "" || selectedTagId_food == 6
              ? "active"
              : ""
          }`}
        >
          {"푸드트럭".split("").map((char, index) => (
            <span key={index} className="building-name">
              {char}
            </span>
          ))}
        </div>

        <div className="image7">
          <span className="building-name">운동장</span>
        </div>
        <div className={`image8 ${
            selectedTagId_food===2 ? "active" : ""
            || selectedTagId_food===1 ? "active" : ""
          }`}
        >
          <span className="building-name">푸드트럭</span>
        </div>

        {Array.from({ length: 31 }, (_, i) => (
          <div
            key={i}
            className={`booth booth${i + 1}
          ${
            selectedTagId === i + 1
              ? "active"
              : "" || i + 1 == 31
              ? selectedTagId_out === i + 1
                ? "active"
                : ""
              : "" || i + 1 == 27
              ? selectedTagId_out === i + 1
                ? "active"
                : ""
              : "" || i + 1 == 28
              ? selectedTagId_out === i + 1
                ? "active"
                : ""
              : "" || i + 1 == 29
              ? selectedTagId_out === i + 1
                ? "active"
                : ""
              : "" || i + 1 == 26
              ? selectedTagId_out === i + 1
                ? "active"
                : ""
              : ""
          }`}
          />
        ))}
        {Array.from({ length: 3 }, (_, i) => (
          <div
            key={i}
            className={`foodupBooth booth${i + 33}
          ${
            selectedTagId_out === i + 33
              ? "active"
              : "" || i + 33 == 34
              ? selectedTagId === i + 33
                ? "active"
                : ""
              : "" || i + 33 == 35
              ? selectedTagId === i + 33
                ? "active"
                : ""
              : ""
          }`}
          />
        ))}
        {Array.from({ length: 3 }, (_, i) => (
          <div key={i} className={`foodupBooth booth${i + 33}
          ${
            selectedTagId_out === i+33 ? "active" : ""
            || i+33==34 ? selectedTagId === i+33 ? "active" : "" : ""
            || i+33==35 ? selectedTagId === i+33 ? "active" : "" : ""
          }`} />
        ))}
      </div>

      <div>

      </div>

      <div></div>

      <div className="filters-layout-container">
        <div
          className="filter-container"
          style={{ overflowX: "scroll", flexWrap: "nowrap" }}
        >
          <br />

          <h2 className="filter-title">즐겨찾는 부스</h2>
          <div className="filter-favorite-tags">
            {favorites.length > 0 ? (
              favorites.map((favorite) => (
                <button
                  className="favorite-tag-button"
                  key={favorite}
                  onClick={() => {
                    // 일치하는 tagData 아이템 찾기
                    const matchingTag = tagData.find(
                      (tag) => tag.name === favorite
                    )
                    const matchingOutTag = tagData_Out.find(
                      (tag) => tag.name === favorite
                    )
                    const matchingFoodTag = tagData_food.find(
                      (tag) => tag.name === favorite
                    )
                    /*
                    const matchingStudioTag = studio.find(
                      (tag) => tag.name ===favorite
                    )*/

                    if (matchingTag) {
                      setSelectedTagId(matchingTag.id)
                      setSelectedTagId_out(null)
                      setSelectedTagId_food(null)
                      
                    } else if (matchingOutTag) {
                      setSelectedTagId_out(matchingOutTag.id)
                      setSelectedTagId(null)
                      setSelectedTagId_food(null)
                      
                    } else if (matchingFoodTag) {
                      setSelectedTagId_food(matchingFoodTag.id)
                      setSelectedTagId(null)
                      setSelectedTagId_out(null)
                    } else {
                      updateSelectedTag("gate")
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
            <div className="addUp">
              더보기
              <img
                src={showMajorTags ? ArrowDown : ArrowUp}
                alt="이미지"
                onClick={handleToggleTags}
                style={{ marginBottom: "0px", marginRight: "10px" }}
              />
            </div>
          </div>
          {showMajorTags ? (
            <div>
              <TagList
                tags={tagData}
                onTagClick={handleTagClick}
                selectedTagId={selectedTagId}
              />
            </div>
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
            tags={tagData_Out}
            onTagClick={handleTagOut}
            selectedTagId={selectedTagId_out}
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
      </div>
      <DragInfo
        selectedTagId={selectedTagId}
        selectedTagId_out={selectedTagId_out}
        selectedTagId_food={selectedTagId_food}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onFavoriteChange={handleFavorite}
      />
    </>
  )
}

export default Designfcn

// import React, { useState, useEffect } from "react"
// import {
//   tagData,
//   infoData,
//   tagData_food,
//   infoData_food,
//   tagData_Out,
// } from "./data"
// import Union from "../../container/InformationPage/designicon/Union.png"
// import Smoke from "../../container/InformationPage/designicon/Smoke.png"
// import ArrowUp from "./designicon/arrowup.png"
// import ArrowDown from "./designicon/arrowdown.png"
// import DragInfo from "./drag"
// import "./drag.scss"
// import "./informationfcn.scss"
// import "./Designfcn.scss"
// import { useSelectedTag } from "./SelectedTagContext"

// const TagList = ({ tags, onTagClick, selectedTagId }) => {
//   return (
//     <div className="filter-tags">
//       {tags.map((tag) => (
//         <button
//           key={tag.id}
//           className={`tag-button ${selectedTagId === tag.id ? "active" : ""}`}
//           onClick={() => onTagClick(tag.id)}
//         >
//           {tag.name}
//         </button>
//       ))}
//     </div>
//   )
// }

// function Designfcn() {
//   const [selectedTagId, setSelectedTagId] = useState(null)
//   const [selectedTagType, setSelectedTagType] = useState(null)
//   const [showMajorTags, setShowMajorTags] = useState(false)
//   const [favorites, setFavorites] = useState([])

//   const { updateSelectedTag } = useSelectedTag()

//   const handleFavorite = (selectedTagContent) => {
//     if (favorites.includes(selectedTagContent)) {
//       setFavorites((prevFavorites) =>
//         prevFavorites.filter((favorite) => favorite !== selectedTagContent)
//       )
//     } else {
//       setFavorites((prevFavorites) => [...prevFavorites, selectedTagContent])
//     }
//   }

//   const handleTagClick = (tagId, tagType) => {
//     setSelectedTagId(tagId)
//     setSelectedTagType(tagType)
//   }

//   const handleToggleTags = () => {
//     setShowMajorTags((prevShowMajorTags) => !prevShowMajorTags)
//   }

//   const handleTouchStart = (e) => {
//     e.preventDefault()
//   }

//   const handleTouchMove = (e) => {
//     e.preventDefault()
//   }
//   useEffect(() => {
//     const handleStorageChange = (e) => {
//       if (e.key === "favorites") {
//         setFavorites(JSON.parse(e.newValue))
//       }
//     }

//     window.addEventListener("storage", handleStorageChange)

//     return () => {
//       window.removeEventListener("storage", handleStorageChange)
//     }
//   }, [])

//   useEffect(() => {
//     const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || []
//     setFavorites(storedFavorites)
//   }, [])

//   return (
//     <>
//       <div className="image-size">
//         <div className="image1">
//           <span className="building-name">소나무숲</span>
//         </div>
//         <div className="image2">
//           <img src={Union} alt="학생회관" />
//           <span className="building-name">학생회관</span>
//         </div>
//         <div className="image3">
//           <img src={Smoke} alt="흡연장" />
//           <span className="building-name">흡연장</span>
//         </div>
//       </div>

//       <div className="filters-layout-container">
//         <div
//           className="filter-container"
//           style={{ overflowX: "scroll", flexWrap: "nowrap" }}
//         >
//           <h2 className="filter-title">즐겨찾는 부스</h2>
//           <div className="filter-favorite-tags">
//             {favorites.length > 0 ? (
//               favorites.map((favorite) => (
//                 <button
//                   className="favorite-tag-button"
//                   key={favorite}
//                   onClick={() => {
//                     const matchingTag = tagData.find(
//                       (tag) => tag.name === favorite
//                     )
//                     const matchingOutTag = tagData_Out.find(
//                       (tag) => tag.name === favorite
//                     )
//                     const matchingFoodTag = tagData_food.find(
//                       (tag) => tag.name === favorite
//                     )

//                     if (matchingTag) {
//                       setSelectedTagId(matchingTag.id)
//                     } else if (matchingOutTag) {
//                       setSelectedTagId(matchingOutTag.id)
//                     } else if (matchingFoodTag) {
//                       setSelectedTagId(matchingFoodTag.id)
//                     } else {
//                       // 부스 타입을 여기에 맞게 설정
//                       setSelectedTagType("your_default_type")
//                       updateSelectedTag("gate")
//                     }
//                   }}
//                 >
//                   {favorite}
//                 </button>
//               ))
//             ) : (
//               <p className="DesignUnivFavorite">하트를 눌러 추가해주세요</p>
//             )}
//           </div>
//         </div>

//         <div className="filter-container">
//           <div className="filter-title-container">
//             <h2 className="filter-title">동아리/학과 부스</h2>
//             <img
//               src={showMajorTags ? ArrowDown : ArrowUp}
//               alt="이미지"
//               onClick={handleToggleTags}
//               style={{ marginBottom: "12px", paddingLeft: "10px" }}
//             />
//           </div>
//           {showMajorTags ? (
//             <TagList
//               tags={tagData}
//               onTagClick={(tagId) => handleTagClick(tagId, "club")}
//               selectedTagId={selectedTagId}
//             />
//           ) : (
//             <TagList
//               tags={tagData.slice(0, 8)}
//               onTagClick={(tagId) => handleTagClick(tagId, "club")}
//               selectedTagId={selectedTagId}
//             />
//           )}
//         </div>

//         <div className="filter-container">
//           <h2 className="filter-title">외부 부스</h2>
//           <TagList
//             tags={tagData_Out}
//             onTagClick={(tagId) => handleTagClick(tagId, "out")}
//             selectedTagId={selectedTagId}
//           />
//         </div>

//         <div className="filter-container">
//           <h2 className="filter-title">푸드트럭</h2>
//           <TagList
//             tags={tagData_food}
//             onTagClick={(tagId) => handleTagClick(tagId, "food")}
//             selectedTagId={selectedTagId}
//           />
//         </div>
//       </div>
//       <DragInfo
//         selectedTagId={selectedTagId}
//         selectedTagType={selectedTagType}
//         onTouchStart={handleTouchStart}
//         onTouchMove={handleTouchMove}
//         onFavoriteChange={handleFavorite}
//       />
//     </>
//   )
// }

// export default Designfcn
