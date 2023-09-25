import React from 'react';
import '../../../styles/components/TimelinePage/Events.scss';
import Calendar from '../../../assets/TimelinePage/carbon_calendar.webp';
import ColorTime from '../../../assets/TimelinePage/carbon_time.webp';
import Location from '../../../assets/TimelinePage/carbon_location.webp';
import Airport from '../../../assets/TimelinePage/airport.webp';
import Cinema from '../../../assets/TimelinePage/cinema.webp';

const Events = () => {
    return (
        <div className="events">
            <div className='events_text_box'>
                <p className="events_text">📢 공연 중 이벤트 한 눈에 보기</p>
                <p className="events_smalltext">(9.25-9.26)</p>
            </div>
            <div className="event-row">
                <div className="event-box1" >
                    <p className="box1_name">총학생회 이벤트 (비행기자리추첨)</p>
                    <p className="box1_icon1"><img src={Calendar} alt='' style={{width: '12px', height:'12px'}}/></p>
                    <p className="box1_date"> 9.25 (월)</p>

                    <p className="box1_icon2"><img src={ColorTime} alt='' style={{width: '12px', height:'12px'}}/></p>
                    <p className="box1_time">18:50-19:20</p>

                    <p className="box1_icon3"><img src={Location} alt='' style={{width: '12px', height:'12px'}}/></p>
                    <p className="box1_location">노천극장</p>

                    <img src={Airport} alt="Airport" className="box-image"  style={{width : '127px', height : '54px'}}/>
                </div>
                <div className="event-box2" >
                    <p className="box1_name">학생회 이벤트 (무비인더캠핑)</p>
                    <p className="box1_icon1"><img src={Calendar} alt='' style={{width: '12px', height:'12px'}}/></p>
                    <p className="box1_date"> 9.26 (화)</p>

                    <p className="box1_icon2"><img src={ColorTime} alt='' style={{width: '12px', height:'12px'}}/></p>
                    <p className="box1_time">18:45-19:15</p>
                    
                    <p className="box1_icon3"><img src={Location} alt='' style={{width: '12px', height:'12px'}}/></p>
                    <p className="box1_location">노천극장</p>

                    <img src={Cinema} alt="Cinema" className="box-image" style={{width : '127px', height : '70px'}}/>
                </div>
            </div>
        </div>
    );
};

export default Events;
