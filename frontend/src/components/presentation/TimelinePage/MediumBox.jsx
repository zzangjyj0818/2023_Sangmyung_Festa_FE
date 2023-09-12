import React from 'react';
import '../../../styles/components/TimelinePage/MediumBox.scss';
import ColorTime from '../../../assets/TimelinePage/color_time.svg';
import Location from '../../../assets/TimelinePage/carbon_location.svg';

const MediumBox = ({tableData}) => {
    const {content1, content2, time1, time2, location1, location2} = tableData;
    return (
        <div className='MediumBox_Container'>
        <div className='MediumBox_TextBox'>
            <div className='MediumBox_MainTitle'>{content1}</div>
            <div className='MediumBox_DisplaySet'>
                <div style={{marginRight : '10px'}}>
                    <div className="Time_Icon">{<img src={ColorTime} alt=''/>}</div>
                    <div className='Information_time '>{time1}</div>
                </div>
                <div>
                    <div className="Location_Icon"><img src={Location} alt=''/></div>
                    <div className='Information_SubTitle'>{location1}</div>
                </div>
            </div>
        </div>
        <div className='MediumBox_TextBox' style={{marginTop : '55px'}}>
            <div className='MediumBox_MainTitle' >{content2}</div>
            <div className='MediumBox_DisplaySet'>
                <div style={{marginRight : '10px'}}>
                    <div className="Time_Icon">{<img src={ColorTime} alt=''/>}</div>
                    <div className='Information_time'>{time2}</div>
                </div>
                <div>
                    <div className="Location_Icon"><img src={Location} alt=''/></div>
                    <div className='Information_SubTitle'>{location2}</div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default MediumBox;