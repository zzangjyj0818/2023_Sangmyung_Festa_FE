import React, {useState} from 'react';
import { categories, categoryDescriptions } from './dataSet';
import { useNavigate, useParams } from 'react-router';
import CreatorList from '../../presentation/CreatorPage/CreatorList';


const CreatorListContainer = () => {
    const navigate = useNavigate();
    const { category } = useParams();
    let initialCategoryIndex = categories.findIndex(cat => cat.url=== category);
    if (initialCategoryIndex === -1) initialCategoryIndex = 0;
    const [currentCategory, setCurrentCategory] = useState(categories[initialCategoryIndex]);

    return (
        <CreatorList
            navigate={navigate}
            currentCategory={currentCategory}
            setCurrentCategory={setCurrentCategory}
            categories={categories}
            categoryDescriptions={categoryDescriptions}
        />
    );
};

export default CreatorListContainer;