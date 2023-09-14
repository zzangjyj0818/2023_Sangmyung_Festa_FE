import React from 'react';
import '../../../styles/components/TimelinePage/LargeBox.scss';
import ColorTime from '../../../assets/TimelinePage/color_time.webp';
import Location from '../../../assets/TimelinePage/carbon_location.webp';

const LargeBox = ({tableData}) => {
    const {content, time, location} = tableData;
    return (
        <div className='LargeBox_Container'>
        <div className='LargeBox_TextBox'>
            <div className='LargeBox_MainTitle' style={{}}>{content}</div>
            <div className='LargeBox_DisplaySet'>
                <div style={{marginRight : '10px'}}>
                    <div className="Time_Icon">{<img src={ColorTime} alt = '' />}</div>
                    <div className='Information_time'>{time}</div>
                </div>
                <div>
                    <div className="Location_Icon"><img src={Location} alt = ''/></div>
                    <div className='Information_SubTitle'>{location}</div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default LargeBox;