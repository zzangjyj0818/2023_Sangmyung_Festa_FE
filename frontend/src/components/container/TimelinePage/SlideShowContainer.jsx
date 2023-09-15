import React, {useEffect, useState} from 'react';
import SlideShow from '../../presentation/TimelinePage/SlideShow';

const SlideShowContainer = ({datas, selectedDate}) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setIndex(0);
    }, [selectedDate]);
    
    return (
        <SlideShow index={index} setIndex={setIndex} datas={datas}/>
    );
};

export default SlideShowContainer;