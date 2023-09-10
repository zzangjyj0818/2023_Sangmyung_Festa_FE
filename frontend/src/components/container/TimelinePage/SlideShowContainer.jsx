import React, {useState} from 'react';
import SlideShow from '../../presentation/TimelinePage/SlideShow';

const SlideShowContainer = () => {
    const [index, setIndex] = useState(0);
    return (
        <SlideShow index={index} setIndex={setIndex}/>
    );
};

export default SlideShowContainer;