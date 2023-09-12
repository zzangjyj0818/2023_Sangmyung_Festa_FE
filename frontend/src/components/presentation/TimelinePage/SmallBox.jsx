import React from 'react';
import '../../../styles/components/TimelinePage/SmallBox.scss';
import ColorTime from '../../../assets/TimelinePage/color_time.svg';
import Location from '../../../assets/TimelinePage/carbon_location.svg';

const SmallBox = ({tableData}) => {
    const {content, time, location} = tableData;
    return (
        <div className='SmallBox_Container'>
            <div className='SmallBox_TextBox'>
                <div className='SmallBox_MainTitle'>{content}</div>
                <div className='SmallBox_DisplaySet'>
                    <div style={{marginRight : '10px'}}>
                        <div className="Time_Icon">{<img src={ColorTime} alt=''/>}</div>
                        <div className='Information_time'>{time}</div>
                    </div>
                    <div>
                        <div className="Location_Icon"><img src={Location} alt=''/></div>
                        <div className='Information_SubTitle'>{location}</div>
                    </div>
                </div>
            </div>
        </div> 
    );
};

export default SmallBox;