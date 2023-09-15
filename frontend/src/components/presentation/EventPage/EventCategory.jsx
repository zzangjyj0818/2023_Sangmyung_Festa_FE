import React from 'react';
import '../../../styles/components/EventPage/EventCategory.scss';

const CategoryButtons = ({currentCategory, handleButtonClick, parameter, categories, categoryDescriptions}) => {
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
        <div className="SelectedCategoryComponent">
            {console.log(parameter.category === currentCategory)}
            {parameter.category === currentCategory && categories.find(category => category.name === currentCategory)?.component}
        </div>
    </div>
  );
};

export default CategoryButtons;

