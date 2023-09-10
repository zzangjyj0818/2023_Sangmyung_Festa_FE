/*EventView.jsx*/
import React from 'react';
import { detailInformations } from './dataSet';
import EventBoxContainer from '../../container/MainPage/EventBoxContainer';
import '../../../styles/components/MainPage/EventView.scss';

const EventView = () => {
   return (
       <div className='EventView_Container'>
           <div className="Event_Text">
               <p>📢 이벤트</p>
           </div>
           <div className='EventView_Wrapper'>
               <div className='EventView_Slide'>
                   <div className="scroll-container">
                       {detailInformations.map((detail, index) => (<EventBoxContainer key={index} detail={detail} />))}
                   </div>
               </div>
           </div>
       </div>
   );
};
export default EventView;
