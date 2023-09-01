import React from 'react';
import AirplaneSeat from '../../../assets/MainPage/AirplaneSeat.png';
import EventGift from '../../../assets/MainPage/EventGift.png';
import DressCode from '../../../assets/MainPage/DressCode.png';
import '../../../styles/components/MainPage/EventView.scss';

const detailInformations = [
    {
        id : 1,
        url : undefined,
        boolDirection: false,
    },
    {
        id : 2,
        title : '🛩️ 스위치 비행기 좌석 추첨',
        first : '탑승권을 구매하고 다양한 경품을',
        second : '받아가보세요! 이곳은 최대 두 줄입니다',
        boolDirection : true,
        url : AirplaneSeat
    },
    {
        id : 3,
        title : '🎁 Switch의 선물을 unlock!',
        first : '상명대에 숨겨진 암호쪽지를 찾고',
        second : '보물을 차지하세요!',
        boolDirection : true,
        url : EventGift
    },
    {
        id : 4,
        title : '👕 드레스코드',
        first : '드레스코드를 맞춰 입고',
        second : '경품도 받아가세요!',
        boolDirection : true,
        url : DressCode
    },
]

const EventBox = ({detail}) => (
    <div className="event_box">
        <img src={detail.url} alt='' style={{width : '287px', height : '195px'}}/>
        <div></div>
    </div>
);

const EventView = () => {
    return (
        <div className='EventView_Container'>
            <div className="Event_Text">
                <p>📢 이벤트</p>
            </div>
            <div className='EventView_Wrapper'>
                <div className='EventView_Slide'>
                    <div className="scroll-container">
                        {detailInformations.map((detail) => <EventBox detail={detail} key = {detail.id}/>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventView;
