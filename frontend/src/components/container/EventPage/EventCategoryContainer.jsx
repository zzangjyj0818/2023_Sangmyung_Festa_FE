import React, {useState} from 'react';
import { useNavigate, useParams } from 'react-router';
import CategoryButtons from '../../presentation/EventPage/EventCategory';
import {categories, categoryDescriptions} from './dataSet';

const EventCategoryContainer = () => {
    const navigate = useNavigate();

    const parameter = useParams();
    const [currentCategory, setCurrentCategory] = useState(parameter.category === undefined ? "좌석 추첨" : parameter.category); // Set the initial selected category here
    const handleButtonClick = (category) => {
        setCurrentCategory(category);
        navigate(`/event/${category}`);
    }
    return (
        <CategoryButtons 
            currentCategory={currentCategory}
            handleButtonClick={handleButtonClick}
            parameter={parameter}
            categories={categories}
            categoryDescriptions={categoryDescriptions}
        />
    );
};

export default EventCategoryContainer;