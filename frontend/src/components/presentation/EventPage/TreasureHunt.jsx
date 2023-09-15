import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import '../../../styles/components/EventPage/TreasureHunt.scss';
import Open from '../../../assets/EventPage/opengift.webp';
import UnOpen from '../../../assets/EventPage/unopengift.webp';
import { fetchBoxState } from '../../../api/fetchBoxState';

const initialDatas = [
    {
        id : 1,
        tag : 'A'
    },
    {
        id : 2,
        tag : 'B'
    },
    {
        id : 3,
        tag : 'C'
    },
    {
        id : 4,
        tag : 'D'
    }
];

const upOpenBoxCount = (datas) => {
    let count = 0;
    for(let i = 0; i < datas.length; i++) {
      if(datas[i].open) count++; 
    }
    
   return count;
}

const TreasureHunt = () => {
   const { data: box, refetch } = useQuery('boxState', fetchBoxState, {
    staleTime: 1000 * 60 * 0.05, // 캐시된 데이터가 2분 동안 신선한 상태로 유지됩니다.
    refetchOnWindowFocus: false,
    retry: false,
  });
   const [datas, setDatas] = useState(initialDatas);

   useEffect(() => {
      if (box) {
         const newDatas = datas.map((data, index) => ({
            ...data,
            open: box[`box${index + 1}`],
         }));
         setDatas(newDatas);
      }
   }, [box]);

   
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
