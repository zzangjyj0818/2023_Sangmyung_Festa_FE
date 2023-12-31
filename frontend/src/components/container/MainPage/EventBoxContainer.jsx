import React from 'react';
import { useNavigate } from 'react-router';
import EventBox from '../../presentation/MainPage/EventBox';

const EventBoxContainer = ({detail}) => {
    const isYoutubeLink = detail.url && detail.url.includes('youtube.com/watch?v=');
    const thumbnailUrl = isYoutubeLink 
        ? `https://img.youtube.com/vi/${detail.url.split('v=')[1]}/0.jpg`
        : detail.url;

    const navigate = useNavigate(); 

    const handleEventBoxClick = () => {
        window.scrollTo(0, 0);
        if (detail.title === "🛩️ 스위치 비행기 좌석 추첨") {
            navigate('/event/seatdraw');
        } else if (detail.title === "🎁 Switch의 선물을 unlock!") {
            navigate('/event/treasurehunt');
        } else if (detail.title === "👕 드레스코드") {
            navigate('/event/dresscode');
        }
    };
    return (
        <EventBox 
            detail={detail}
            handleEventBoxClick={handleEventBoxClick}
            thumbnailUrl={thumbnailUrl}
        />
    );
};

export default EventBoxContainer;