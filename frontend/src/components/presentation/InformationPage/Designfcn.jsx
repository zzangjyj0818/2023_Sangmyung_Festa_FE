import React from 'react';
import TagList from './TagList';
import DragContainer from '../../container/InformationPage/DragContainer';
import Union from "../../../assets/InformationPage/Union.webp"
import Smoke from "../../../assets/InformationPage/Smoke.webp"
import ArrowUp from "../../../assets/InformationPage/addUp.webp"
import ArrowDown from "../../../assets/InformationPage/addDown.webp"
import "../../../styles/components/InformationPage/drag.scss"
import "../../../styles/components/InformationPage/informationfcn.scss"
import "../../../styles/components/InformationPage/Designfcn.scss"

const Designfcn = ({
    selectedTagId,
    selectedTagId_food,
    selectedTagId_out,
    favorites,
    tagData,
    tagData_Out,
    tagData_food,
    setSelectedTagId,
    setSelectedTagId_out,
    setSelectedTagId_food,
    updateSelectedTag,
    showMajorTags,
    handleToggleTags,
    handleTagClick,
    handleTagOut,
    handleTagFood,
    handleTouchStart,
    handleTouchMove,
    handleFavorite
}) => {
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
            <span className="building-name"></span>
          </div>
  
          <div className={`image4 ${selectedTagId_food === 3 ? "active" : "" || selectedTagId_food === 4 ? "active" : ""
            }`}>
            <span className="building-name">푸드<br />트럭 </span>
          </div>
  
          <div className="image5">
            <span className="building-name">FREE ZONE</span>
          </div>
  
          <div
            className={`image6 ${selectedTagId_food === 7
              ? "active"
              : "" || selectedTagId_food === 8
                ? "active"
                : "" || selectedTagId_food === 5
                  ? "active"
                  : "" || selectedTagId_food === 6
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
          <div className={`image8 ${selectedTagId_food === 2 ? "active" : ""
            || selectedTagId_food === 1 ? "active" : ""
            }`}
          >
            <span className="building-name">푸드트럭</span>
          </div>
  
          {Array.from({ length: 31 }, (_, i) => (
            <div
              key={i}
              className={`booth booth${i + 1}
            ${selectedTagId === i + 1
                  ? "active"
                  : "" || i + 1 === 31
                    ? selectedTagId_out === i + 1
                      ? "active"
                      : ""
                    : "" || i + 1 === 27
                      ? selectedTagId_out === i + 1
                        ? "active"
                        : ""
                      : "" || i + 1 === 28
                        ? selectedTagId_out === i + 1
                          ? "active"
                          : ""
                        : "" || i + 1 === 29
                          ? selectedTagId_out === i + 1
                            ? "active"
                            : ""
                          : "" || i + 1 === 26
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
            ${selectedTagId_out === i + 33
                  ? "active"
                  : "" || i + 33 === 34
                    ? selectedTagId === i + 33
                      ? "active"
                      : ""
                    : "" || i + 33 === 35
                      ? selectedTagId === i + 33
                        ? "active"
                        : ""
                      : ""
                }`}
            />
          ))}
          {Array.from({ length: 3 }, (_, i) => (
            <div key={i} className={`foodupBooth booth${i + 33}
            ${selectedTagId_out === i + 33 ? "active" : ""
                || i + 33 === 34 ? selectedTagId === i + 33 ? "active" : "" : ""
                  || i + 33 === 35 ? selectedTagId === i + 33 ? "active" : "" : ""
              }`} />
          ))}
        </div>
  
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
              <div className="addUp" onClick={handleToggleTags}>
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
  
          <DragContainer
            selectedTagId={selectedTagId}
            selectedTagId_out={selectedTagId_out}
            selectedTagId_food={selectedTagId_food}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onFavoriteChange={handleFavorite}
          />
      </>
    );
};

export default Designfcn;
