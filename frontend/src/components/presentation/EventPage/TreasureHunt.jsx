import React from 'react';
import '../../../styles/components/EventPage/TreasureHunt.scss';
import Open from '../../../assets/EventPage/opengift.webp';
import UnOpen from '../../../assets/EventPage/unopengift.webp';
import { upOpenBoxCount } from '../../container/EventPage/TreasureHuntContainer';

const TreasureHunt = ({datas}) => {

   return (
       <div className='TreasureHunt_Container'>
           <div className='TreasureHunt_Wrapper'>
               <div className='TreasureHunt_Wrapper_MainTitle'>Switch의 선물을 unlock!</div>
               <div className='TreasureHunt_Wrapper_SubTitle'>9.25 (월) ~ 소진시까지</div>
               <div className='TreasureHunt_Box_Collection'>
                   {datas.map(data => (
                       <div className='TreasureHunt_Box_img' key={data.id}>
                           <img src={data.open === 0 ? Open : UnOpen} alt='' />
                           <div className='TreasureHunt_Box_Text'>{data.tag}</div>
                       </div>
                   ))}
               </div>
               <div className='TreasureHunt_Wrapper_Count'>
                   {`남은 수량 ${upOpenBoxCount(datas)}`} 
               </div>
           </div>
       </div>
   );
};

export default TreasureHunt;
