import React from 'react';
import '../../../../styles/components/TimelinePage/Boxes/Box.scss';
import ColorTime from '../../../../assets/TimelinePage/color_time.svg';
import Location from '../../../../assets/TimelinePage/carbon_location.svg';

const Box = ({tableData, boxType}) => {
    const {content, time, location} = tableData;

    let containerClass;
    switch (boxType) {
        case '1':
            containerClass = 'Box1_Container';
            break;
        case '2':
            containerClass = 'Box2_Container';
            break;
        case '3':
            containerClass = 'Box3_Container';
            break;
        case '4':
            containerClass = 'Box4_Container';
            break;
        case '5':
            containerClass = 'Box5_Container';
            break;
        case '6':
            containerClass = 'Box6_Container';
            break;
        case '7':
            containerClass = 'Box7_Container';
            break;
        default:
    }

    return (
        <div className={containerClass}>
          <div className='Box_TextBox'>
              <div className='Box_MainTitle' style={{}}>{content}</div>
              <div className='Box_DisplaySet'>
                  <div style={{marginRight : '10px'}}>
                      <div className="Time_Icon">{<img src={ColorTime} alt='' />}</div>
                      <div className='Information_time'>{time}</div>
                  </div>
                  <div>
                      <div className="Location_Icon"><img src={Location} alt='' /></div>
                      <div className='Information_SubTitle'>{location}</div>
                  </div>
              </div>
          </div>
        </div>
      );
};

export default Box;