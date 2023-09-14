import React from 'react';
import '../../../styles/components/MainPage/MainView.scss';
import NumberBoxContainer from '../../container/MainPage/NumberBoxContainer';
import Down from '../../../assets/MainPage/keyboard_arrow_up.svg';

const MainView = ({numbers, isNight}) => {
    return (
        <div className={isNight === true ? 'MainView_Container1' : 'MainView_Container2'}>
            <div className='MainView_TextBox'>
                <div className='MainView_Text1'>2023.9/25-26</div>
                <div className='MainView_Text2'>DEAR FOR YOU</div>
                <div className='MainView_Text3'>: 비상</div>
            </div>
            <div className='MainView_Count'>
                ✈️ 누적 방문자 수
                <div className='Count_Box'>
                    {numbers.map((number, index) => <NumberBoxContainer key={index} value={number} index={index} />)}
                    <div style={{paddingTop: '60px'}}>명</div>
                </div>
            </div>
            <div className='MainView_Bottom'>
                <div className='MainView_Bottom_Text'>밑으로 스크롤</div>
                <img src={Down} alt=''/>
            </div>
        </div>
    );
};

export default MainView;
