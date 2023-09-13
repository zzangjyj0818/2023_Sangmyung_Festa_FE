import React from 'react';
import { useQuery } from 'react-query';
import AirPlane from '../../../assets/EventPage/Avion.svg';
import smallAirPlane from '../../../assets/EventPage/small_Airplane.svg';
import barcode from '../../../assets/EventPage/bar.png';
import '../../../styles/components/EventPage/SeatDraw.scss';
import { fetchTicket } from '../../../api/fetchTicket';

const SeatDraw = () => {

    const { data: ticket, refetch} = useQuery('ticket', fetchTicket, {
        staleTime: 1000 * 60 * 1 // 캐시된 데이터가 5분 동안 신선한 상태로 유지됩니다.
      });

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
                            backgroundColor : (month === 9 && days === 12) ? '#2757FF' : '#EEE',
                            color : (month === 9 && days === 12) ? '#fff' : '#77767A',
                        }}>9.25 (월)</div>
                    <div className='DateBtn_date' 
                        style={{
                            borderRadius : '0 12px 12px 0', 
                            backgroundColor : (month === 9 && days === 13) ? '#2757FF' : '#EEE',
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
                            <div className='RightBox_Text'>{ticket}</div>
                            <div className='detail_box'>
                                <img src={barcode} alt='' style={{marginTop : '6px'}}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
            <div className='SeatDraw_Detail'>
                <div className='SeatDraw_Detail_Layout'>
                    <div className='SeatDraw_Detail_Layout_Title'>대상</div>
                    <div className='SeatDraw_Detail_Layout_Text' style={{width : '145px'}}>학생회비를 납부한 상명대학교 재학생</div>
                </div>
                <div className='SeatDraw_Detail_Layout'>
                    <div className='SeatDraw_Detail_Layout_Title'>구매</div>
                    <div className='SeatDraw_Detail_Layout_Text' style={{width : 'auto'}}>1,000원 (현금만 가능)</div>
                </div>
                <div className='SeatDraw_Detail_Layout'>
                    <div className='SeatDraw_Detail_Layout_Title'>장소</div>
                    <div className='SeatDraw_Detail_Layout_Text' style={{width : 'auto'}}>총학생회 운영 본부</div>
                </div>
                <div className='SeatDraw_Detail_Layout'>
                    <div className='SeatDraw_Detail_Layout_Title'>추첨</div>
                    <div className='SeatDraw_Detail_Layout_Text' style={{width : '170px'}}>2023.09.26 (화) 18:50~19:20 노천극장</div>
                </div>
            </div>
            <div className='SeatDraw_BottomText1'>티켓 구매는 1인 1매로 제한되며 &nbsp; 수익금 100만원은 기부 예정입니다</div>
            <div className='SeatDraw_BottomText2'>(홀로어르신과 국가유공자어르신들  대한적십자사 대전세종지사)</div>
        </div>
    );
};

export default SeatDraw;