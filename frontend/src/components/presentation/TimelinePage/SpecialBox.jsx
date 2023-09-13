import React from 'react';
import '../../../styles/components/TimelinePage/SpecialBox.scss';
import ColorTime from '../../../assets/TimelinePage/color_time.svg';
import Location from '../../../assets/TimelinePage/carbon_location.svg';

const SpecialBox = ({tableData}) => {
    const {content, time, location} = tableData;
    return (
        <div className='SpecialBox_Container'>
        <div className='SpecialBox_TextBox'>
            <div className='SpecialBox_MainTitle'>{content}</div>
            <div className='SpecialBox_DisplaySet'>
                <div style={{marginRight : '10px'}}>
                    <div className="Time_Icon">{<img src={ColorTime} alt=''/>}</div>
                    <div className='Information_time '>{time}</div>
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

export default SpecialBox;