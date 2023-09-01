import React, { useState, useRef, useEffect } from 'react';
import { tagData, infoData, tagData_food, infoData_food } from './data'; // 데이터를 임포트하세요
import time1 from './carbon_time.png'
import '../../../styles/pages/designUniv.scss';
import Union from '../../container/InformationPage/designicon/Union.png';
import Smoke from '../../container/InformationPage/designicon/Smoke.png'
import { Link } from 'react-router-dom';
import ArrowUp from './arrowup.png'
import ArrowDown from './arrowdown.png'
import DragInfo from './drag';
import './drag.scss';
const TagList = ({ tags, onTagClick }) => {
  return (
    <div className="DesignUnivContainer">
      {tags.map((tag) => (
        <button
          key={tag.id}
          className="tagDesignUniv"
          onClick={() => onTagClick(tag.id)}
        >
          {tag.name}
        </button>
      ))}
    </div>
  );
};
const InfoDisplay = ({ info }) => {
  return (
    <div>
      <p>{info}</p>
    </div>
  );
};

function DesignUniv() {
  const [selectedTagId, setSelectedTagId] = useState(null);
  const [selectedTagId_food, setSelectedTagId_food] = useState(null);
  const [activeNavButton, setActiveNavButton] = useState("design") // 페이지 접속 시 선택된 기본 버튼
  const [boothInfo, setBoothInfo] = useState("")
  const [showMajorTags, setShowMajorTags] = useState(false);



  //
  const onClickSelButton = (buttonName) => {
    setActiveNavButton((prev) => (prev === buttonName ? "design" : buttonName))
    setSelectedTagId("") // 버튼을 누를 때마다 선택된 태그 초기화
    setBoothInfo("") // 버튼을 누를 때마다 선택된 태그와 부스 정보 초기화
  }
  const handleTagClick = (tagId) => {
    setSelectedTagId(tagId);
    setSelectedTagId_food(null); // 다른 태그 선택 시 해당 태그 초기화
  };
  
  const handleTagFood = (tagId) => {
    setSelectedTagId_food(tagId);
    setSelectedTagId(null); // 다른 태그 선택 시 해당 태그 초기화
  };
  
  const handleToggleTags = () => {
    setShowMajorTags((prevShowMajorTags) => !prevShowMajorTags);
  };

  const handleTouchStart = (e) => {
    e.preventDefault();
    // 다른 초기화 논리를 추가하세요
  };
  
  const handleTouchMove = (e) => {
    e.preventDefault();
    // 드래그 이벤트 처리 로직을 추가하세요
  };
  
  const selectedInfo = selectedTagId
    ? infoData.find((info) => info.tagId === selectedTagId).content
    : '';
  const selectedInfo_food = selectedTagId_food
    ? infoData_food.find((info) => info.tagId === selectedTagId_food).content : '';
  return (
    <div className="App">

      <div className="image-size">
        {/* <img src={image} alt="이미지" /> */}
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

        <div className="image4">
          {"푸드트럭A".split("").map((char, index) => (
            <span key={index} className="building-name">
              {char}
            </span>
          ))}
        </div>

        <div className="image5">
          <span className="building-name">FREE ZONE</span>
        </div>

        <div className="image6">
          {"푸드트럭B".split("").map((char, index) => (
            <span key={index} className="building-name">
              {char}
            </span>
          ))}
        </div>

        <div className="image7">
          <span className="building-name">운동장</span>
        </div>

        {Array.from({ length: 13 }, (_, i) => (
          <div key={i} className={`booth booth${i + 1}`} />
        ))}

        {/* <div className="overlay-div-container design">
          {tags.map((tag) => (
            <div
              key={tag.id}
              className={`tag-div${tag.id} ${
                selectedTag.includes(tag.Department) ? "active" : "" // 배열과 직접비교를 할 수 없으므로 배열안데 특정 학과이름이 들어있는지 확인
              }`}
              onClick={() => onClickTag(tag.Department)}
            />
          ))}
        </div> */}
      </div>
      <div className='DesignUnivArrow'>
        <h1 className='DesignUniv'>즐겨찾는 부스</h1>
        <p className='DesignUnivFavorite'>하트를 눌러 추가해주세요</p>
      </div>

      <div className='DesignUnivArrow'>
        <h1 className='DesignUniv'>동아리 / 학과 부스</h1>
        <img
          src={showMajorTags ? ArrowDown : ArrowUp}
          alt="이미지"
          onClick={handleToggleTags}
        />
      </div>


      {showMajorTags ? (
        <TagList tags={tagData} onTagClick={handleTagClick} />
      ) : (
        <TagList tags={tagData.slice(0, 8)} onTagClick={handleTagClick} />
      )}

      <h1 className='DesignUniv'>외부부스</h1>
      <TagList tags={tagData_food} onTagClick={handleTagFood} />

      <h1 className='DesignUniv'>푸드트럭</h1>
      <TagList tags={tagData_food} onTagClick={handleTagFood} />




      
      <DragInfo selectedTagId={selectedTagId} selectedTagId_food={selectedTagId_food}  onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}/>

      


    </div>
  );
}

export default DesignUniv;
