import React, { useState } from 'react';
import { tagData, infoData, tagData_food, infoData_food } from './data'; // 데이터를 임포트하세요
import image from './image 211.png';
import time1 from './carbon_time.png'
import '../../styles/pages/designUniv.scss';

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
  const handleTagClick = (tagId) => {
    setSelectedTagId(tagId);
  };
  const handleTagFood = (tagId) => {
    setSelectedTagId_food(tagId)
  }
  const selectedInfo = selectedTagId
    ? infoData.find((info) => info.tagId === selectedTagId).content
    : '';
  const selectedInfo_food = selectedTagId_food
    ? infoData_food.find((info) => info.tagId === selectedTagId_food).content : '';
  return (
    <div className="App">
      <img src={image} alt="Design Univ" className='designUniviImage' />
      <h1 className='DesignUniv'>동아리 부스</h1>

      <TagList tags={tagData} onTagClick={handleTagClick} />

      <h1 className='DesignUniv'>푸드트럭</h1>
      <TagList tags={tagData_food} onTagClick={handleTagFood} />
      <div className='DesignUnivtime'>
        <img src={time1} alt="time" className='designUnivImage' />
        <InfoDisplay info={selectedInfo} />
      </div>

      <InfoDisplay info={selectedInfo_food} />

    </div>
  );
}

export default DesignUniv;
