// // src/components/container/InformationPage/door.js
// import React, { useState } from "react"
// import image from "./image.png"
// import "./door.scss"
// import Header from "../../common/Header"

// const Door = () => {
//   const [selectedTags, setSelectedTags] = useState([])
//   const tags = ["인터스트리디자인", "소프트웨어", "수학", "과학"]
//   const [isGateSelected, setIsGateSelected] = useState(false)

//   const toggleGateSelection = () => {
//     setIsGateSelected((prev) => !prev)
//   }

//   const onClickTag = (tag) => {
//     setSelectedTags((prevTags) => {
//       if (prevTags.includes(tag)) {
//         return prevTags.filter((t) => t !== tag)
//       } else if (prevTags.length < 3) {
//         return [...prevTags, tag]
//       } else {
//         return [tag, ...prevTags.slice(0, 2)]
//       }
//     })
//   }

//   return (
//     <>
//       <Header />
//       <div className="navigation-cp-container">
//         <div className="navigation-cp-space">
//           <div className="navigation-cp">디자인대학</div>
//           <div
//             className={`navigation-cp${isGateSelected ? ".active" : ""}`}
//             onClick={toggleGateSelection}
//           >
//             정문
//           </div>
//         </div>
//       </div>
//       <div className={`navigation-line ${isGateSelected ? "active" : ""}`} />

//       <div>
//         <div className="image-size">
//           <img
//             src={image}
//             alt="이미지"
//             style={{
//               width: "363px",
//               height: "175px",
//             }}
//           />
//         </div>

//         <div className="filter-tags">
//           {tags.map((tag) => (
//             <button
//               key={tag}
//               className={`tag-button ${
//                 selectedTags.includes(tag) ? "active" : ""
//               }`}
//               onClick={() => onClickTag(tag)}
//             >
//               #{tag}
//             </button>
//           ))}
//         </div>
//       </div>
//     </>
//   )
// }

// export default Door

// Door.js
import React, { useState } from "react"
import image from "./image.png"
import "./door.scss"
import Header from "../../common/Header"
import tags from "./tags.json"

const Door = () => {
  const [selectedTags, setSelectedTags] = useState([])
  const [isGateSelected, setIsGateSelected] = useState(false)

  const toggleGateSelection = () => {
    setIsGateSelected((prev) => !prev)
  }

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
      <div className="navigation-cp-container">
        <div className="navigation-cp-space">
          <div className="navigation-cp">디자인대학</div>
          <div
            className={`navigation-cp ${isGateSelected ? "active" : ""}`}
            onClick={toggleGateSelection}
          >
            정문
          </div>
        </div>
      </div>
      <div className={`navigation-line ${isGateSelected ? "active" : ""}`}>
        {isGateSelected && <div className="selected"></div>}
      </div>

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

        <div className="filter-container">
          <h2 className="filter-title">동아리/학과 부스</h2>
          <div className="filter-tags">
            {tags.map((tag) => (
              <button
                key={tag}
                className={`tag-button ${
                  selectedTags.includes(tag) ? "active" : ""
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
