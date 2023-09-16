import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import '../../../styles/components/EventPage/TreasureHunt.scss';
import Open from '../../../assets/EventPage/opengift.webp';
import UnOpen from '../../../assets/EventPage/unopengift.webp';
import { fetchBoxState } from '../../../api/fetchBoxState';

const textArray = [
    { 
        content : "학생회비를 납부한 재학생에 한하여 인당 1개의 캡슐을 뽑음",
        width : 265,
        height : 46,
    }, 
    {
        content : "암호가 적힌 캡슐을 뽑은 경우 상자를 열어볼 기회를 제공",
        width : 219,
        height : 46,
    }, 
    {
        content : "상자가 열린 경우 상자 내용에 맞는 상품 지급 & 명단 작성",
        width : 256,
        height : 46,
    }, 
    {
        content : "암호가 적힌 캡슐을 뽑은 경우 상자를 열어볼 기회를 제공",
        width : 219,
        height : 46,
    }
];

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
           <div className='TreasureHunt_JoinWrapper'>
                <div className='TreasureHunt_Join'>
                    <div>참여방법</div>
                    <div className='TreasureHunt_Point'></div>
                </div>
                <div className='TreasureHunt_notice'>캡슐을 뽑고 선물상자를 열어 선물을 받아가세요!</div>
                <div className='TreasureHunt_notice2'>(단. 진짜 암호종이는 4개 뿐입니다.)</div>
                <div style={{marginLeft : 'auto', marginRight: 'auto'}}>
                    {textArray.map((text, index) => (
                        <div key={index} className='TreasureHunt_notice3'>
                            <div className='TreasureHunt_notice3_number'>{index+1}.</div>
                            <div className='TreasureHunt_notice4' style={{width : text.width, height : text.height}}>{text.content}</div>
                        </div>  
                    ))}
                </div>
                <div className='TreasureHunt_Detail'>
                    <div className='TreasureHunt_Detail_Layout'>
                        <div className='TreasureHunt_Detail_Layout_Title'>시간</div>
                        <div className='TreasureHunt_Detail_Layout_Text' style={{width : '200px' ,textAlign: 'right'}}>&nbsp;&nbsp;&nbsp;2023.09.25.(월) 오전 11시 ~선착순 소진 시까지(17:30)</div>
                    </div>
                    <div className='TreasureHunt_Detail_Layout'>
                        <div className='TreasureHunt_Detail_Layout_Title'>대상</div>
                        <div className='TreasureHunt_Detail_Layout_Text' style={{width : '130px'}}>학생회비를 납부한 상명대학교 재학생</div>
                    </div>
                    <div className='TreasureHunt_Detail_Layout'>
                        <div className='TreasureHunt_Detail_Layout_Title2'>보물 경품</div>
                        <div className='TreasureHunt_Detail_Layout_Text1' style={{width : '200px',textAlign: 'right'}}>애플워치 SE 2세대<br/>빔프로젝터<br/>배민 상품권 10만원<br/>캐리어</div>
                    </div>
                    <div className='TreasureHunt_Detail_Layout'>
                        <div className='TreasureHunt_Detail_Layout_Title1'>상품</div>
                        <div className='TreasureHunt_Detail_Layout_Text2' style={{width : '230px'}}>학생식당 자유이용권 20장<br/>학생회관 안경점 1만원 이용권 30장<br/>학생회관 서점(문구점) 5천원 이용권 20장<br/>학생회관 미용실 커트 50% 할인권 20장<br/>한누리관 ing카페 아이스티 50장<br/>디자인대 화방 5천원 이용권 30장<br/>하리보 미니 1,200개</div>
                    </div>
                    <div className='TreasureHunt_Detail_Layout'>
                        <div className='TreasureHunt_Detail_Layout_Title'>상품지급</div>
                        <div className='TreasureHunt_Detail_Layout_Text' style={{width : '130px', fontSize:'18px'}}>총학생회 운영본부</div>
                    </div>
                    <div className='TreasureHunt_BottomText'>본 이벤트는 학생회비 납부 팔찌를 착용해야 참여하실 수 있습니다.</div>
                </div>
            </div>
       </div>
   );
};

export default TreasureHunt;
