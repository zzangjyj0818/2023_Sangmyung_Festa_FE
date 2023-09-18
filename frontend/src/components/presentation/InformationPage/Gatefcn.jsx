import React from 'react';
import TagList from './TagList';
import DragContainer from '../../container/InformationPage/DragContainer';
import "../../../styles/components/InformationPage/informationfcn.scss"
import "../../../styles/components/InformationPage/Gatefcn.scss"

const Gatefcn = ({
    selectedTagId, 
    favorites, 
    tagData_Out2,
    setSelectedTagId,
    setNotMatchingTag,
    updateSelectedTag,
    handleTagClick,
    handleTouchStart,
    handleTouchMove,
    handleFavorite

}) => {
    return (
        <>
        <div className="image-size">
          <div className="gate-image1">
            <span className="building-name">충전소</span>
          </div>
  
          <div className="gate-image2">
            <span className="building-name">계단</span>
          </div>
  
          <div className={"gate-booth foodbooth"}>
            <span className="building-name">
              플리
              <br />
              마켓
            </span>
          </div>
  
          <div
            className={`gate-booth booth1 ${selectedTagId === 1 ? "active" : ""}`}
          />
          <div
            className={`gate-booth booth2 ${selectedTagId === 2 ? "active" : ""}`}
          />
          <div
            className={`gate-booth booth3 booth3-1 ${
              selectedTagId === 3 ? "active" : ""
            }`}
          />
          <div
            className={`gate-booth booth3 booth3-2 ${
              selectedTagId === 3 ? "active" : ""
            }`}
          />
          <div
            className={`gate-booth booth4 ${selectedTagId === 4 ? "active" : ""}`}
          />
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
                      const matchingTag = tagData_Out2.find(
                        (tag) => tag.name === favorite
                      )
  
                      if (matchingTag) {
                        setSelectedTagId(matchingTag.id)
                      } else {
                        setNotMatchingTag(favorite)
                        console.log(favorite) // setNotMatchingTag 이후에 console.log를 호출합니다.
                        updateSelectedTag("design", favorite)
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
            <h2 className="filter-title">외부부스</h2>
            <TagList
              tags={tagData_Out2}
              onTagClick={handleTagClick}
              selectedTagId={selectedTagId}
            />
          </div>
        </div>
          <DragContainer
            selectedTagId_out2={selectedTagId}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onFavoriteChange={handleFavorite}
          />      
      </>
    );
};

export default Gatefcn;