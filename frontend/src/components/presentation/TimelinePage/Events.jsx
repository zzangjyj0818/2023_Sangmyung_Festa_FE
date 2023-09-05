import React from 'react';
import '../../../styles/components/TimelinePage/Events.scss';
import {PiCalendarBlank} from 'react-icons/pi';
import {IoMdTime} from 'react-icons/io';
import {HiOutlineLocationMarker} from 'react-icons/hi';
import Airport from '../../../assets/TimelinePage/airport.svg';
import Cinema from '../../../assets/TimelinePage/cinema.svg';

const Events = () => {
    return (
        <div className="events">
            <p className="events_text">📢 공연 중 이벤트 한 눈에 보기</p>
            <p className="events_smalltext">(9.25-9.26)</p>
            <div className="event-row">
                <div className="event-box1" >
                    <p className="box1_name">학생회 이벤트 (무비인더캠핑)</p>
                    <p className="box1_icon1"><PiCalendarBlank size={12}/></p>
                    <p className="box1_date"> 9.25 (월)</p>

                    <p className="box1_icon2"><IoMdTime size={12}/></p>
                    <p className="box1_time">19:40-20:25</p>

                    <p className="box1_icon3"><HiOutlineLocationMarker size={12} /></p>
                    <p className="box1_location">녹천극장</p>

                    <img src={Cinema} alt="Cinema" className="box-image"/>
                </div>
                <div className="event-box2" >
                    <p className="box1_name">총학생회 이벤트 (비행기자리추첨)</p>
                    <p className="box1_icon1"><PiCalendarBlank size={12}/></p>
                    <p className="box1_date"> 9.26 (화)</p>

                    <p className="box1_icon2"><IoMdTime size={12}/></p>
                    <p className="box1_time">19:40-20:25</p>
                    
                    <p className="box1_icon3"><HiOutlineLocationMarker size={12} /></p>
                    <p className="box1_location">녹천극장</p>

                    <img src={Airport} alt="Airport" className="box-image"/>
                </div>
            </div>
        </div>
    );
};

export default Events;
