import React from 'react';
import NumberBox from './NumberBox';
import '../../../styles/components/MainPage/MainView.scss';

const MainView = ({count, loading, error}) => {
    const numbers = count ? count.toLocaleString().split('') : []; // count 값이 있을 때만 toLocaleString() 호출

    return (
        <div className='MainView_Container'>
            <div className='MainView_TextBox'>
                <div className='MainView_Text1'>2023.9/25-26</div>
                <div className='MainView_Text2'>DEAR FOR YOU</div>
                <div className='MainView_Text3'>: 비상</div>
            </div>
            <div className='MainView_Count'>
                ✈️ 누적 방문자 수
                {numbers.length > 0 && ( // numbers 배열에 값이 있을 때만 렌더링
                    <div className='Count_Box'>
                        {numbers.map((number, index) => <NumberBox key={index} value={number}/>)}
                        <div style={{paddingTop: '70px'}}>명</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MainView;
