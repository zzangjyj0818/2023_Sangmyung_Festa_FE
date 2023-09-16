import React from 'react';
import '../../../styles/components/TimelinePage/Box.scss';
import ColorTime from '../../../assets/TimelinePage/color_time.webp';
import Location from '../../../assets/TimelinePage/carbon_location.webp';

const Box = ({tableData}) => {
    const {content1, content2, time1, time2, location1, location2, height} = tableData;

    return (
        <div className='Box_Container' style={{height : height}}>
          <div className='Box_TextBox'>
              <div className='Box_MainTitle' style={{}}>{content1}</div>
              <div className='Box_DisplaySet'>
                  <div style={{marginRight : '10px'}}>
                      <div className="Time_Icon">{<img src={ColorTime} alt='' />}</div>
                      <div className='Information_time'>{time1}</div>
                  </div>
                  <div>
                      <div className="Location_Icon"><img src={Location} alt='' /></div>
                      <div className='Information_SubTitle'>{location1}</div>
                  </div>
              </div>
          </div>
            { content2 !== undefined && 
            <div className='Box_TextBox' style={{marginTop : '55px'}}>
                <div className='BoxMainTitle' >{content2}</div>
                <div className='Box_DisplaySet'>
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
            }
        </div>
      );
};

export default Box;