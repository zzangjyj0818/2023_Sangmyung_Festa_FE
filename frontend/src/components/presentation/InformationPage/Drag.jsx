import React from 'react';
import "../../../styles/components/InformationPage/drag.scss"
import Time from "../../../assets/InformationPage/carbon_time.webp"
import EmptyHeart from "../../../assets/InformationPage/Heart.webp"
import FilledHeart from "../../../assets/InformationPage/Heart2.webp"
import Line from "../../../assets/InformationPage/Line 5.webp"
import LinkImage from "../../../assets/InformationPage/Link_2.webp"

const Drag = ({
    miniWindowRef, 
    handleMouseDown, 
    handleTouchStart, 
    handleMouseMove,
    handleTouchMove,
    handleMouseUp,
    handleTouchEnd,
    selectedTagContent,
    favorites,
    handleHeart,
    selectedTagInfo,
    selectedTagGame,
    selectedTagExplain,
    selectedTagOutExplain,
    selectedTagFoodExplain,
    selectedTagFoodContent,
    selectedTagFoodInfo,
    selectedTagOutContent,
    selectedTagOutInfo,
    selectedTagFoodGame,
    selectedTagOutGame,
    selectedTagOutContent2
}) => {
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
          style={{ left: "0" }} // 수평 이동 막음
        >
          <div className="mini-window-content">
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
                  <img src={Line} alt="Line" />
                </div>
            {selectedTagContent && (
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div className="mini-window-Title">{selectedTagContent}</div>
                  <img
                    src={
                      favorites.includes(selectedTagContent)
                        ? FilledHeart
                        : EmptyHeart
                    }
                    alt="emptyheart"
                    onClick={() => handleHeart(selectedTagContent)}
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
  
                <div className="mini-window-TimeInfo">{selectedTagExplain}</div>
               
                <img src={LinkImage} alt="Link" />
  
                <hr />
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div className="mini-window-GameImage"> 게임사진 및 촬영 </div>
                  <div style={{ flex: 1, textAlign: "right" }}>
                    {selectedTagGame}{" "}
                  </div>
                </div>
                <hr />
              </div>
            )}
  
             {selectedTagFoodContent && (
              <div>
                
  
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div className="mini-window-Title">
                    {selectedTagFoodContent}
                  </div>
                  <img
                    src={
                      favorites.includes(selectedTagFoodContent)
                        ? FilledHeart
                        : EmptyHeart
                    }
                    alt="emptyheart"
                    onClick={() => handleHeart(selectedTagFoodContent)}
                  />
                </div>
  
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={Time}
                    alt="time"
                    style={{ width: "14px", height: "14px", marginRight: "8px" }}
                  />
                  <div className="mini-window-Time"> 시간 </div>
                  <div className="mini-window-TimeInfo">
                    {selectedTagFoodInfo}
                  </div>
                </div>
  
                <div className="mini-window-TimeInfo">{selectedTagFoodExplain}</div>
               
                <img src={LinkImage} alt="Link" />
  
                <hr />
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div className="mini-window-GameImage"> 게임사진 및 촬영 </div>
                  <div style={{ flex: 1, textAlign: "right" }}>
                    {selectedTagFoodGame}{" "}
                  </div>
                </div>
                <hr />
              </div>
            )}
  
            {selectedTagOutContent && (
              <div>
                
  
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div className="mini-window-Title">{selectedTagOutContent}</div>
                  <img
                    src={
                      favorites.includes(selectedTagOutContent)
                        ? FilledHeart
                        : EmptyHeart
                    }
                    alt="emptyheart"
                    onClick={() => handleHeart(selectedTagOutContent)}
                  />
                </div>
  
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={Time}
                    alt="time"
                    style={{ width: "14px", height: "14px", marginRight: "8px" }}
                  />
                  <div className="mini-window-Time"> 시간 </div>
                  <div className="mini-window-TimeInfo">{selectedTagOutInfo}</div>
                </div>
  
                <div className="mini-window-TimeInfo">{selectedTagOutExplain}</div>
                
                <img src={LinkImage} alt="Link" />
  
                <hr />
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div className="mini-window-GameImage"> 게임사진 및 촬영 </div>
                  <div style={{ flex: 1, textAlign: "right" }}>
                    {selectedTagOutGame}{" "}
                  </div>
                </div>
                <hr />
              </div>
            )}
  
            {selectedTagOutContent2 && (
              <div>
                
  
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div className="mini-window-Title">
                    {selectedTagOutContent2}
                  </div>
                  <img
                    src={
                      favorites.includes(selectedTagOutContent2)
                        ? FilledHeart
                        : EmptyHeart
                    }
                    alt="emptyheart"
                    onClick={() => handleHeart(selectedTagOutContent2)}
                  />
                </div>
  
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={Time}
                    alt="time"
                    style={{ width: "14px", height: "14px", marginRight: "8px" }}
                  />
                  <div className="mini-window-Time"> 시간 </div>
                  <div className="mini-window-TimeInfo">
                    {selectedTagFoodInfo}
                  </div>
                </div>
  
                <div className="mini-window-TimeInfo">학과부스설명</div>
                <div className="mini-window-TimeInfo">학과부스설명</div>
                <img src={LinkImage} alt="Link" />
  
                <hr />
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div className="mini-window-GameImage"> 게임사진 및 촬영 </div>
                  <div style={{ flex: 1, textAlign: "right" }}>
                    {selectedTagGame}
                  </div>
                </div>
                <hr />
              </div>
            )} 
          </div>
          
        </div>
      </div>
    );
};

export default Drag;