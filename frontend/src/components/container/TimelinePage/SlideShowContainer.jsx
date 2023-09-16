import React, {useEffect, useState} from 'react';
import SlideShow from '../../presentation/TimelinePage/SlideShow';

const SlideShowContainer = ({datas, selectedDate}) => {
    const [index, setIndex] = useState(0);
    const [front, setFront] = useState(true);

    useEffect(() => {
        setIndex(0);
    }, [selectedDate]);

    const onClick = () => {
        setFront(!front);
    }
    
    return (
        <SlideShow 
            index={index} 
            setIndex={setIndex} 
            datas={datas}
            front={front}
            onClick={onClick} 
        />
    );
};

export default SlideShowContainer;