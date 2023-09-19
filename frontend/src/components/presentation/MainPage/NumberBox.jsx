import React from 'react';
import '../../../styles/components/MainPage/NumberBox.scss';

const NumberBox = ({value, index, isVisible, delay}) => {
    return (
        <div className='NumberBox_Container'>
            <div className='NumberBox_Wrapper' style={{ visibility: isVisible ? 'visible' : 'hidden' , animationDelay: delay}}>
                <div style={{ animationDelay: delay, fontFamily: 'Noto Sans KR' }}>{value}</div>
            </div>
        </div>
    );
};

export default NumberBox;
