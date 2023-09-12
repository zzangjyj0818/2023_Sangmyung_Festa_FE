import React, {useState, useEffect} from 'react';
import { useQuery } from 'react-query';
import smung from '../../../assets/EventPage/smung.svg';
import stick from '../../../assets/EventPage/stick.svg';
import soldoutsmung from '../../../assets/EventPage/soldoutsmung.png';
import soldoutstick from '../../../assets/EventPage/soldoutstick.png';
import '../../../styles/components/EventPage/DressCode.scss';
import { fetchDressCode } from '../../../api/fetchDressCode';

const initialDatas = [
    {
        id : 1,
        dress : 1
    },
    {
        id : 2,
        dress : 0
    },
];

const DressCode = () => {
    const { data: dress, refetch } = useQuery('dress', fetchDressCode);
    const [datas, setDatas] = useState(initialDatas);
 
    useEffect(() => {
       if (dress) {
          const newDatas = datas.map((data, index) => ({
             ...data,
             dress: dress[`dress${index + 1}`],
          }));
          setDatas(newDatas);
       }
    }, [dress]);

    return (
        <div className='DressCode_Container'>
            <div className='DressCode_Wrapper'>
                <div className='DressCode_Wrapper_MainTitle'>
                    드레스코드
                </div>
                <div className='Detail_Gift'>
                    <div className='Detail_Gift_LayOut' style={{marginRight : '23px'}}>
                        <div className='Detail_Gift_Name' style={{marginBottom: '9px'}}>상품1</div>
                        <div className='Detail_Gift_Img'>{initialDatas[0].dress !== 0 ? <img src={stick} alt=''/> : <img src={soldoutstick} alt=''/>}</div>
                        <div className='Detail_Gift_DetailName' style={{fontSize: '18px'}}>야광봉</div>
                        <div className='Detail_Gift_CountBox'>{initialDatas[0].dress ? '남은수량 500개' : '남은수량 0개'}</div>
                    </div>
                    <div className='Detail_Gift_LayOut'>
                        <div className='Detail_Gift_LayOut'>
                            <div className='Detail_Gift_Name' style={{marginBottom: '4px'}}>상품2</div>
                            <div className='Detail_Gift_Img'>{initialDatas[1].dress !== 0 ? <img src={smung} alt=''/> : <img src={soldoutsmung} alt=''/>}</div>
                            <div className='Detail_Gift_DetailName' style={{fontSize: '16px', marginTop: '7px'}}>수뭉이 타투 스티커(10종)</div>
                            <div className='Detail_Gift_CountBox'>{initialDatas[1].dress === 1 ? '남은수량 1000개' : '남은수량 0개'}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DressCode;