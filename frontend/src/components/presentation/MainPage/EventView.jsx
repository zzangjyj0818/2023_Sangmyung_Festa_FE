import React from 'react';
import '../../../styles/components/MainPage/EventView.scss';
import ScrollContainer from 'react-indiana-drag-scroll';

const EventBox = ({ title }) => (
    <div className="event_box">
        <p>{title}</p>
        {/* 여기에 컨텐츠 추가하면될ㄷ듯 */}
    </div>
);

const EventView = () => {
    return (
        <div className='EventView_Container'>
            <div className="Event_Text">
                <p>📢 이벤트</p>
                <ScrollContainer className="scroll-container" horizontal={true} vertical={false}>
                    <EventBox title="축제 메인 영상" />
                    <EventBox title="라인업 영상" />
                    <EventBox title="이벤트1(보물찾기)" />
                    <EventBox title="이벤트2(티켓추첨)" />
                </ScrollContainer>
            </div>
        </div>
    );
};

export default EventView;
