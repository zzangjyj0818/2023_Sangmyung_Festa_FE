import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import '../../../styles/components/EventPage/EventCategory.scss';
import SeatDraw from './SeatDraw';
import TreasureHunt from './TreasureHunt';
import DressCode from './DressCode';

const CategoryButtons = () => {
const navigate = useNavigate();
  const categories = [
    { name: '좌석 추첨', component: <SeatDraw /> },
    { name: '보물 찾기', component: <TreasureHunt /> },
    { name: '드레스 코드', component: <DressCode /> }
  ];

  const categoryDescriptions = {
    "좌석 추첨": "스위치 비행기 좌석 추첨",
    "보물 찾기": "Switch의 선물을 unlock!",
    "드레스 코드": "드레스 코드에 대한 설명"
  };
  const parameter = useParams();
  const [currentCategory, setCurrentCategory] = useState(parameter.category === undefined ? "좌석 추첨" : parameter.category); // Set the initial selected category here
  const handleButtonClick = (category) => {
    setCurrentCategory(category);
    navigate(`/event/${category}`);
  }

  return (
    <div className="EventCategory_Container">
        <div className="EventCategory-selector">
            {categories.map((category) => (
                <button className={`EventCategory-button ${currentCategory === category.name ? "selected" : ""}`} 
                    key={category.name} onClick={() => handleButtonClick(category.name)}>
                    {category.name}
                </button>
            ))}
        </div>

        <div className="EventDescriptions" >
            <p>{currentCategory && categoryDescriptions[currentCategory]}</p>
        </div>

        <div className="SelectedCategoryComponent">
            {console.log(parameter.category === currentCategory)}
            {parameter.category === currentCategory && categories.find(category => category.name === currentCategory)?.component}
        </div>
    </div>
  );
};

export default CategoryButtons;

