import React, {useState} from 'react';
import { useNavigate, useParams } from 'react-router';
import EventCategory from '../../presentation/EventPage/EventCategory';
import {categories, categoryDescriptions} from './dataSet';

const EventCategoryContainer = () => {
    const navigate = useNavigate();

    const parameter = useParams();
    const [currentCategory, setCurrentCategory] = useState(parameter.category === undefined ? "seatdraw" : parameter.category); // Set the initial selected category here
    const handleButtonClick = (category) => {
        setCurrentCategory(category.url);
        navigate(`/event/${category.url}`);
    }
    return (
        <EventCategory 
            currentCategory={currentCategory}
            handleButtonClick={handleButtonClick}
            parameter={parameter}
            categories={categories}
            categoryDescriptions={categoryDescriptions}
        />
    );
};

export default EventCategoryContainer;