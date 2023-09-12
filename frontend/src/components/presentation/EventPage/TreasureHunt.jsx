import React from 'react';
import '../../../styles/components/EventPage/TreasureHunt.scss';
import Open from '../../../assets/EventPage/opengift.png';
import UnOpen from '../../../assets/EventPage/unopengift.png';

const datas = [
    {
        id : 1,
        open : 1,
        tag : 'A'
    },
    {
        id : 2,
        open : 1,
        tag : 'B'
    },
    {
        id : 3,
        open : 0,
        tag : 'C'
    },
    {
        id : 4,
        open : 1,
        tag : 'D'
    }
];

const upOpenBoxCount = (datas) => {
    let count = 0;
    for(let i = 0; i<4; i++) {
        if(datas[i].open) count++; 
    }
    return count;
}

const TreasureHunt = () => {
    return (
        <div className='TreasureHunt_Container'>
            <div className='TreasureHunt_Wrapper'>
                <div className='TreasureHunt_Wrapper_MainTitle'>Switch의 선물을 unlock!</div>
                <div className='TreasureHunt_Wrapper_SubTitle'>9.25 (월) ~ 소진시까지</div>
                <div className='TreasureHunt_Box_Collection'>
                    {datas.map(data => (
                        <div className='TreasureHunt_Box_img' key={data.id}>
                            <img src={data.open === 1 ? UnOpen : Open} alt='' />
                            <div className='TreasureHunt_Box_Text'>{data.tag}</div>
                        </div>
                    ))}
                </div>
                <div className='TreasureHunt_Wrapper_Count'>
                    {`남은 수량   ${upOpenBoxCount(datas)}`} 
                </div>
            </div>
        </div>
    );
};

export default TreasureHunt;