import React, {useState} from 'react';
import smung1 from '../../../assets/EventPage/sm1.webp';
import smung2 from '../../../assets/EventPage/sm2.webp';
import smung3 from '../../../assets/EventPage/sm3.webp';
import smung4 from '../../../assets/EventPage/sm4.webp';
import smung5 from '../../../assets/EventPage/sm5.webp';
import smung6 from '../../../assets/EventPage/sm6.webp';
import smung7 from '../../../assets/EventPage/sm7.webp';
import smung8 from '../../../assets/EventPage/sm8.webp';
import smung9 from '../../../assets/EventPage/sm9.webp';
import smung10 from '../../../assets/EventPage/sm10.webp';
import '../../../styles/components/EventPage/SmungSlideShow.scss';

const smungDatas = [
    {
        id : 1,
        url : smung1,
    },
    {
        id : 2,
        url : smung2,
    },
    {
        id : 3,
        url : smung3,
    },
    {
        id : 4,
        url : smung4,
    },
    {
        id : 5,
        url : smung5,
    },
    {
        id : 6,
        url : smung6,
    },
    {
        id : 7,
        url : smung7,
    },
    {
        id : 8,
        url : smung8,
    },
    {
        id : 9,
        url : smung9,
    },
    {
        id : 10,
        url : smung10,
    },
]

const SmungSlideShow = () => {
    const [index, setIndex] = useState(0);

    return (
        <div className='SmungSlideShow_Container'>
            <div className='SmungSlideShow_Wrapper'>
                <div className='SmungSlideShow_MainTitle'>수뭉이 타투 스티커 도안</div>
            </div>
            <div className='SmungSlideShow_Collection'>
            { index > 0 ? 
                <div className='SmungSlideShow_Collection_Btn' onClick={()=>{setIndex(index-1)}}>
                {`<`}</div> : <div className='SmungSlideShow_Collection_UnBtn'></div>
            }
            <div style={{width: '140px'}}><img src={smungDatas[index].url} alt='' /></div>
            { index < 9 ? 
                <div className='SmungSlideShow_Collection_Btn' onClick={()=>{setIndex(index+1)}}>
                {`>`}</div> : <div className='SmungSlideShow_Collection_UnBtn' ></div>
            }
            </div>
            <div className='smung_circle_collection'>
            {smungDatas.map((data) => (
              <div key={data.id} className='smung_circle' style={{background : index  === data.id-1 ? '#92AAFF' : '#C8C6CA' }}></div>
          ))}
          </div>
        </div>
    );
};

export default SmungSlideShow;