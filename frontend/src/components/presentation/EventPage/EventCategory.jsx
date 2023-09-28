import React from 'react';
import '../../../styles/components/EventPage/EventCategory.scss';

const EventCategory = ({currentCategory, handleButtonClick, parameter, categories}) => {
  return (
    <div className="EventCategory_Container">
        <div className="EventCategory-selector">
            {categories.map((category) => (
                <button className={`EventCategory-button ${currentCategory === category.url ? "selected" : ""}`} 
                    key={category.name} onClick={() => handleButtonClick(category)}>
                    {category.name}
                </button>
            ))}
        </div>
        <div className="SelectedCategoryComponent">
            {console.log(parameter.category === currentCategory)}
            {parameter.category === currentCategory && categories.find(category => category.url === currentCategory)?.component}
        </div>
    </div>
  );
};

export default EventCategory;

