/*EventView.jsx*/
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AirplaneSeat from '../../../assets/MainPage/AirplaneSeat.png';
import EventGift from '../../../assets/MainPage/EventGift.png';
import DressCode from '../../../assets/MainPage/DressCode.png';
import '../../../styles/components/MainPage/EventView.scss';

const detailInformations = [
    {
        url : 'https://www.youtube.com/watch?v=jOTfBlKSQYY',
        boolDirection: false,
        image : undefined
    },
    {
        title : '🛩️ 스위치 비행기 좌석 추첨',
        first : '탑승권을 구매하고 다양한 경품을',
        second : '받아가보세요! 이곳은 최대 두 줄입니다',
        boolDirection : true,
        image: AirplaneSeat
    },
    {
        title : '🎁 Switch의 선물을 unlock!',
        first : '상명대에 숨겨진 암호쪽지를 찾고',
        second : '보물을 차지하세요!',
        boolDirection : true,
        image : EventGift
    },
    {
        title : '👕 드레스코드',
        first : '드레스코드를 맞춰 입고',
        second : '경품도 받아가세요!',
        boolDirection: true,
        image: DressCode
   }
]

const EventBox = ({detail}) => {
    const isYoutubeLink = detail.url && detail.url.includes('youtube.com/watch?v=');
    const thumbnailUrl = isYoutubeLink 
        ? `https://img.youtube.com/vi/${detail.url.split('v=')[1]}/0.jpg`
        : detail.url;

    const navigate = useNavigate(); 

    const handleEventBoxClick = () => {
        window.scrollTo(0, 0);
        if (detail.title === "🛩️ 스위치 비행기 좌석 추첨") {
            navigate('/event/좌석 추첨');
        } else if (detail.title === "🎁 Switch의 선물을 unlock!") {
            navigate('/event/보물 찾기');
        } else if (detail.title === "👕 드레스코드") {
            navigate('/event/드레스 코드');
        }
    };
      
      
 
    return (
        <div className="event_box" onClick={handleEventBoxClick}>
            {detail.image === undefined ?
                <a href = {detail.url} target = '_blank' rel='noreferrer'>
                    <img src={thumbnailUrl} alt=''/>
                </a> :
                <div>
                    <img src={detail.image} alt=''/>
                </div>
            }
            <div className="text_detail">
                {detail.title && <p className="title_detail">{detail.title}</p>}
                {detail.first && <p className="first_detail">{detail.first}</p>}
                {detail.second && <p className="second_detail">{detail.second}</p>}
            </div>
            {detail.boolDirection && <div className="arrow_detail">{`>`}</div>}
        </div>
    );
};

const EventView = () => {
    
   return (
       <div className='EventView_Container'>
           <div className="Event_Text">
               <p>📢 이벤트</p>
           </div>
           <div className='EventView_Wrapper'>
               <div className='EventView_Slide'>
                   <div className="scroll-container">
                       {detailInformations.map((detail, index) => (<EventBox key={index} detail={detail} />))}
                   </div>
               </div>
           </div>
       </div>
   );
};
export default EventView;
