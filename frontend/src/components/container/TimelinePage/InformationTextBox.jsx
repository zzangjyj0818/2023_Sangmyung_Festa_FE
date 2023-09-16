// InformationBox.jsx
import React from 'react';
import ColorTime from '../../../assets/TimelinePage/color_time.svg';
import Location from '../../../assets/TimelinePage/carbon_location.svg';
import '../../../styles/components/TimelinePage/InformationTextBox.scss';

const InformationBox = ({title, time, location}) => (
    <div className='Information_TextBox'>
        <div className='Information_MainTitle' style={{marginTop : '14px'}}>{title}</div>
        <div className='Information_DisplaySet'>
            <div style={{marginRight : '10px'}}>
                <div className="Time_Icon">{<img src={ColorTime} alt='' style={{width:"12px", height:"12px"}}/>}</div>
                <div className='Information_time'>{time}</div>
            </div>
            <div>
                <div className="Location_Icon"><img src={Location} alt='' /></div>
                <div className='Information_SubTitle'>{location}</div>
            </div>
        </div>
    </div>  
);

export default InformationBox;
