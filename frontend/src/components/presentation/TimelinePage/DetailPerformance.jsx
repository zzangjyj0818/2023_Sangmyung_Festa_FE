import React from 'react';
import SlideShowContainer from '../../container/TimelinePage/SlideShowContainer';
import '../../../styles/components/TimelinePage/DetailPerformance1.scss';
import Events from './Events';

const DetailPerformance1 = ({datas, selectedDate}) => {
    return (
        <div className='DetailPerformance_Container'>
            <div className='DetailPerformance_Wrapper'>
                <SlideShowContainer datas={datas} selectedDate={selectedDate}/>
                <Events/>
            </div>
        </div>
    );
};

export default DetailPerformance1;
