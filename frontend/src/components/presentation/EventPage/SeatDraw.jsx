import React from 'react';
import '../../../styles/components/EventPage/SeatDraw.scss';

const SeatDraw = () => {

    let month = new Date().getMonth()+1;
    let days = new Date().getDate();

    return (
        <div className='SeatDraw_Container'>
            <div className='SeatDraw_Wrapper'>
                {console.log(month)}
                {console.log(days)}
                <div className='SeatDraw_Wrapper_MainTitle'>스위치 비행기 좌석 추첨</div>
                <div className='SeatDraw_DateBtn'>
                    <div className='DateBtn_date' 
                        style={{
                            borderRadius : '12px 0 0 12px', 
                            backgroundColor : (month === 9 && days === 12) ? '#2757FF' : 'lightgray',
                            color : (month === 9 && days === 12) ? '#fff' : '#77767A',
                        }}>9.25 (월)</div>
                    <div className='DateBtn_date' 
                        style={{
                            borderRadius : '0 12px 12px 0', 
                            backgroundColor : (month === 9 && days === 13) ? '#2757FF' : 'lightgray',
                            color : (month === 9 && days === 13) ? '#fff' : '#77767A',
                        }}>9.26 (화)</div>
                </div>
                <div></div>
            </div>
            <div className='SeatDraw_Detail'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default SeatDraw;