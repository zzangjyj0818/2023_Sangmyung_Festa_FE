import React, {useState} from 'react';
import { categories, categoryDescriptions } from './dataSet';
import { useParams } from 'react-router';
import CreatorList from '../../presentation/CreatorPage/CreatorList';


const CreatorListContainer = () => {
    const { category } = useParams();
    let initialCategoryIndex = categories.findIndex(cat => cat.name === category);
    if (initialCategoryIndex === -1) initialCategoryIndex = 0;
    const [currentCategory, setCurrentCategory] = useState(categories[initialCategoryIndex]);

    return (
        <CreatorList
            currentCategory={currentCategory}
            setCurrentCategory={setCurrentCategory}
            categories={categories}
            categoryDescriptions={categoryDescriptions}
        />
    );
};

export default CreatorListContainer;