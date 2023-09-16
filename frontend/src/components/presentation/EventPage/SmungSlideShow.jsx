import React, {useState} from 'react';

const SmungSlideShow = () => {
    const [index, setIndex] = useState(1);
    return (
        <div className='SmungSlideShow_Container'>
            <div className='SmungSlideShow_Wrapper'>
                <div className='SmungSlideShow_MainTitle'>수뭉이 타투 스티커 도안</div>
            </div>
        </div>
    );
};

export default SmungSlideShow;