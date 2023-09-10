// CreatorList.jsx
import React from 'react'; 
import CreatorItem from './CreatorItem';
import '../../../styles/components/CreatorPage/CreatorList.scss';

const CreatorList = ({currentCategory, setCurrentCategory, categories, categoryDescriptions}) => {  
    return (
        <div className='Creator'>
            <div className="category-selector">
                {categories.map((category) => (
                    <button className={`category-button ${currentCategory.name === category.name ? "selected" : ""}`}
                        key={category.name} onClick={() => setCurrentCategory(category)}>
                        {category.name}
                    </button>
                ))}
            </div>
            
            <div className="Descriptions">
                <p>{categoryDescriptions[currentCategory.name]}</p>
            </div>
            
            <div className="CreatorListBlock">
                {currentCategory.creators.map((creator,index) => (
                    <CreatorItem key={index} creator={creator}/>
                ))}
            </div>
        </div>
     );
  }
  
  export default CreatorList;


