import React from 'react';
import '../../../styles/components/MainPage/NumberBox.scss';

const NumberBox = ({value}) => {
    return (
        <div className='NumberBox_Container'>
            <div className='NumberBox_Wrapper'>
                {value}
            </div>
            <div className='Number_Box_Box'></div>
            <div className='Number_Box_Box'></div>
            <div className='Number_Box_Box'></div>
        </div>
    );
};

export default NumberBox;