import React, { useState, useEffect } from 'react';
import '../../../styles/components/TimelinePage/DetailTable2.scss';
import Time from '../../../assets/TimelinePage/carbon_time.svg';
import CheckIcon from '../../../assets/TimelinePage/clarity_event-line.svg';
import ColorTime from '../../../assets/TimelinePage/color_time.svg';
import Location from '../../../assets/TimelinePage/carbon_location.svg';



const times = ['10:00','12:00','14:00','16:00','18:00', '20:00','22:00'];

const DetailTable2 = () => {
     const [activeTimeIndex, setActiveTimeIndex] = useState(0);

    const getCurrentTimeIndex = () => {
        const now = new Date();
        const nowInMinutes = now.getHours() * 60 + now.getMinutes();

        return times.findIndex(time => {
            const [hours, minutes] = time.split(':').map(Number);
            return hours * 60 + minutes > nowInMinutes;
        }) - 1;
    };

    useEffect(() => {
        if (new Date().getMonth() === 8 && new Date().getDate() === 10) {
            setActiveTimeIndex(getCurrentTimeIndex());

            const intervalId = setInterval(() => {
                setActiveTimeIndex(getCurrentTimeIndex());
            }, 60 * 1000); 

            return () => clearInterval(intervalId); 
        }
    }, []);



    return (
        <div className='DetailTable2_Container'>
            <div className='DetailTable2_TimeList'>
                <div className='TimeList2_Title'>
                    <div>{<img src={Time} alt='' style={{width:"14px", height:"14px"}}/>}</div>
                    <div className="Time_text2">시간</div>
                </div>
                <div className='TimeList2_items'>
                    {times.map((time, index) => 
                        <div className='items_wrapper2' key={index}>
                            <div className='TimeList_item2'>{time}</div>
                            <div 
                            className='item_circle2'
                            style={{
                                backgroundColor:
                                        new Date().getMonth() === 8 && new Date().getDate() === 11 ?
                                        (activeTimeIndex === index ? '#4F75FF' :
                                        activeTimeIndex >= index ? '#C7E7FF' : 'lightgray') : 'lightgray'
                                    }}
                                >
                                </div>
                        </div>
                    )}
                </div>
            </div>
                <div className='DetailTable2_HorizonBar'></div>
            <div className='DetailTable2_InformationList'>
                <div className='InformationList_Title2'>
                    <div>{<img src={CheckIcon} alt='' style={{width:"14px", height:"14px"}}/>}</div>
                    <div className="Information_text2">이벤트</div>
                </div>
                <div className='Box_Collection2'>
                    <div className='Information2Box1'>
                        <div className='Information_TextBox2'>
                            <div className='Information_MainTitle2' style={{marginTop : '14px'}}>푸드트럭 & 부스운영</div>
                            <div className='Information_DisplaySet2'>
                                <div style={{marginRight : '10px'}}>
                                    <div className="Time_Icon">{<img src={ColorTime} alt='' style={{width:"12px", height:"12px"}}/>}</div>
                                    <div className='Information_time2 '>10:00-22:00</div>
                                </div>
                                <div>
                                    <div className="Location_Icon"><img src={Location} alt='' style={{width:"12px", height:"12px"}}/></div>
                                    <div className='Information_SubTitle2'>학생회관 앞</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='Information2Box2'>
                        <div className='Information_TextBox2'>
                            <div className='Information_MainTitle2' style={{marginTop : '14px'}}>단과대 연합 프로그램</div>
                            <div className='Information_DisplaySet2'>
                                <div style={{marginRight : '10px'}}>
                                    <div className="Time_Icon">{<img src={ColorTime} alt='' style={{width:"12px", height:"12px"}}/>}</div>
                                    <div className='Information_time2 '>16:00-19:00</div>
                                </div>
                                <div>
                                    <div className="Location_Icon"><img src={Location} alt='' style={{width:"12px", height:"12px"}}/></div>
                                    <div className='Information_SubTitle2'>노천극장</div>
                                </div>
                            </div>
                        </div>
                        <div className='Information_TextBox2'>
                            <div className='Information_MainTitle2' style={{marginTop : '76px'}}>동아리공연</div>
                            <div className='Information_DisplaySet2'>
                                <div style={{marginRight : '10px'}}>
                                    <div className="Time_Icon">{<img src={ColorTime} alt='' style={{width:"12px", height:"12px"}}/>}</div>
                                    <div className='Information_time2'>19:00-19:30</div>
                                </div>
                                <div>
                                    <div className="Location_Icon"><img src={Location} alt='' style={{width:"12px", height:"12px"}}/></div>
                                    <div className='Information_SubTitle2'>노천극장</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='Information2Box3'>
                        <div className='Information_TextBox2'>
                            <div className='Information_MainTitle2' style={{marginTop : '10px'}}>총학생회 이벤트 (비행기 자리 추첨)</div>
                            <div className='Information_DisplaySet2'>
                                <div style={{marginRight : '10px'}}>
                                    <div className="Time_Icon">{<img src={ColorTime} alt='' style={{width:"12px", height:"12px"}}/>}</div>
                                    <div className='Information_time2'>19:30-20:00</div>
                                </div>
                                <div>
                                    <div className="Location_Icon"><img src={Location} alt='' style={{width:"12px", height:"12px"}}/></div>
                                    <div className='Information_SubTitle2'>노천극장</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='Information2Box4'>
                        <div className='Information_TextBox2'>
                            <div className='Information_MainTitle2' style={{marginTop : '7px'}}>연예인 초청 공연</div>
                            <div className='Information_DisplaySet2'>
                                <div style={{marginRight : '10px'}}>
                                    <div className="Time_Icon">{<img src={ColorTime} alt='' style={{width:"12px", height:"12px"}}/>}</div>
                                    <div className='Information_time2'>20:00-22:30</div>
                                </div>
                                <div>
                                    <div className="Location_Icon"><img src={Location} alt='' style={{width:"12px", height:"12px"}}/></div>
                                    <div className='Information_SubTitle2'>노천극장</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailTable2;