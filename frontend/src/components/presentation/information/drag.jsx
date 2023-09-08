import React, { useState, useRef } from 'react';
import './drag.scss';
import { tagData, infoData, tagData_food, infoData_food } from './data'; // 데이터를 임포트하세요
function DragInfo({ selectedTagId, selectedTagId_food }) {
  const [miniWindowOpen, setMiniWindowOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffsetY, setDragOffsetY] = useState(0);
  const miniWindowRef = useRef(null);

  const toggleMiniWindow = () => {
    setMiniWindowOpen(!miniWindowOpen);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const rect = miniWindowRef.current.getBoundingClientRect();
    setDragOffsetY(e.clientY - rect.top);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    const touch = e.touches[0];
    const rect = miniWindowRef.current.getBoundingClientRect();
    setDragOffsetY(touch.clientY - rect.top);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const newY = e.clientY - dragOffsetY;
      miniWindowRef.current.style.top = `${newY}px`;
    }
  };

  const handleTouchMove = (e) => {
    if (isDragging) {
      const touch = e.touches[0];
      const newY = touch.clientY - dragOffsetY;
      miniWindowRef.current.style.top = `${newY}px`;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const selectedTagContent = selectedTagId
    ? tagData.find((tag) => tag.id === selectedTagId)?.name
    : '';

  const selectedTagFoodContent = selectedTagId_food
    ? tagData_food.find((tag) => tag.id === selectedTagId_food)?.name
    : '';

    const selectedTagInfo = selectedTagId
    ? infoData.find((tag) => tag.id === selectedTagId)?.content
    : '';

  const selectedTagFoodInfo = selectedTagId_food
    ? infoData_food.find((tag) => tag.id === selectedTagId_food)?.content
    : '';
  return (
    <div>

      {/* 작은 창 */}
      <div
        ref={miniWindowRef}
        className={`mini-window-container ${miniWindowOpen ? 'opened' : ''}`}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseUp={handleMouseUp}
        onTouchEnd={handleTouchEnd}
        style={{ left: '0' }} // 수평 이동 막음
      >
        <div className="mini-window-content">
          {selectedTagContent && (
            <div>

              <div>{selectedTagContent}</div>
              <div>{selectedTagInfo}</div>
              <div>학과부스설명</div>
              <div>학과부스설명</div>
              <hr/>
            </div>
          )}

          {selectedTagFoodContent && (
            <div >
              <div >{selectedTagFoodContent}</div>
              <div>{selectedTagFoodInfo}</div>
              <div>학과부스설명</div>
              <div>학과부스설명</div>
              <hr/>
              <div>게임 및 사진촬영</div>
              <hr/>
            </div>
          )}
        </div>
        {/* <div className="mini-window-toggle" onClick={toggleMiniWindow}>
          {miniWindowOpen ? '닫기' : '열기'}
        </div> */}
      </div>
    </div>
  );
}

export default DragInfo;

