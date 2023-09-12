import React from 'react';
import AirPlane from '../../../assets/EventPage/Avion.svg';
import smallAirPlane from '../../../assets/EventPage/small_Airplane.svg';
import barcode from '../../../assets/EventPage/bar.png';
import '../../../styles/components/EventPage/SeatDraw.scss';

const SeatDraw = () => {

    let month = new Date().getMonth()+1;
    let days = new Date().getDate();

    return (
        <div className='SeatDraw_Container'>
            <div className='SeatDraw_Wrapper'>
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
                <div className='SeatDraw_Wrapper_Ticket'>
                    <div className='LeftBox'>
                        <div className='Box_Header'>
                            <div><img src={AirPlane} alt=''/></div>
                            <div style={{marginLeft : '2px'}}>SMU festival</div>
                        </div>
                        <div>
                            <div className='LeftBox_Text'>남은 티켓수</div>
                            <div className='detail_box'>
                                SMU
                                <img src={smallAirPlane} alt='' style={{marginLeft: '5px', marginRight : '5px', marginBottom : '3px'}}/>
                                Festival
                            </div>
                        </div>
                    </div>
                    <div className='RightBox'>
                        <div className='Box_Header'>Boarding Pass</div>
                        <div>
                            <div className='RightBox_Text'>800</div>
                            <div className='detail_box'>
                                <img src={barcode} alt='' style={{marginTop : '6px'}}/>
                            </div>
                        </div>
                    </div>
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