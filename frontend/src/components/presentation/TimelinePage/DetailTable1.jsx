import React, { useState, useEffect } from 'react';
import '../../../styles/components/TimelinePage/DetailTable1.scss';
import Time from '../../../assets/TimelinePage/carbon_time.svg';
import CheckIcon from '../../../assets/TimelinePage/clarity_event-line.svg';
import ColorTime from '../../../assets/TimelinePage/color_time.svg';
import Location from '../../../assets/TimelinePage/carbon_location.svg';

const times = ['10:00','12:00','14:00','16:00','18:00', '20:00','22:00'];

const DetailTable1 = () => {
    const [activeTimeIndex, setActiveTimeIndex] = useState(0);

     const getCurrentTimeIndex = () => {
        const now = new Date();
        const nowInMinutes = now.getHours() * 60 + now.getMinutes();
    
        let index = times.findIndex(time => {
            const [hours, minutes] = time.split(':').map(Number);
            return hours * 60 + minutes > nowInMinutes;
        });
    
       
        if (index === -1) {
            index = times.length - 1;
        } else if (index > 0) {
            
            index--;
        }
    
        return index;
    };

    useEffect(() => {
        if (new Date().getMonth() === 8 && new Date().getDate() === 11) {
            setActiveTimeIndex(getCurrentTimeIndex());

            const intervalId = setInterval(() => {
                setActiveTimeIndex(getCurrentTimeIndex());
            }, 60 * 1000); 

            return () => clearInterval(intervalId); 
        }
    }, []);


    return (
        <div className='DetailTable1_Container'>
            <div className='DetailTable1_TimeList'>
                <div className='TimeList_Title'>
                    <div>{<img src={Time} alt='' style={{width:"14px", height:"14px"}}/>}</div>
                    <div className="Time_text"> 시간</div>
                </div>
                <div className='TimeList_items'>
                    {times.map((time, index) =>
                        <div className='items_wrapper' key={index}>
                            <div className='TimeList_item'>{time}</div>
                            <div 
                                className='item_circle' 
                                style={{
                                    backgroundColor:
                                        new Date().getMonth() === 8 && new Date().getDate() === 9 ?
                                        (activeTimeIndex === index ? '#4F75FF' :
                                        activeTimeIndex >= index ? '#C7E7FF' : 'lightgray') : 'lightgray'
                                }}
                            />
                        </div>
                    )}
                </div>
            </div>

            <div className='DetailTable1_HorizonBar'></div>
            <div className='DetailTable1_InformationList'>
                <div className='InformationList_Title'>
                    <div>{<img src={CheckIcon} alt='' style={{width:"14px", height:"14px"}}/>}</div>
                    <div className="Information_text"> 이벤트</div>
                </div>
                <div className='Box_Collection'>
                    <div className='InformationBox1'>
                        <div className='Information_TextBox'>
                            <div className='Information_MainTitle' style={{marginTop : '14px'}}>푸드트럭 & 부스운영</div>
                            <div className='Information_DisplaySet'>
                                <div style={{marginRight : '10px'}}>
                                    <div className="Time_Icon">{<img src={ColorTime} alt = '' style={{width:"12px", height:"12px"}}/>}</div>
                                    <div className='Information_time '>10:00-22:00</div>
                                </div>
                                <div>
                                    <div className="Location_Icon"><img src={Location} alt = ''/></div>
                                    <div className='Information_SubTitle'>학생회관 앞</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='InformationBox2'>
                        <div className='Information_TextBox'>
                            <div className='Information_MainTitle' style={{marginTop : '14px'}}>동아리 공연</div>
                            <div className='Information_DisplaySet'>
                                <div style={{marginRight : '10px'}}>
                                    <div className="Time_Icon">{<img src={ColorTime} alt='' style={{width:"12px", height:"12px"}}/>}</div>
                                    <div className='Information_time '>16:00-19:30</div>
                                </div>
                                <div>
                                    <div className="Location_Icon"><img src={Location} alt=''/></div>
                                    <div className='Information_SubTitle'>노천극장</div>
                                </div>
                            </div>
                        </div>
                        <div className='Information_TextBox'>
                            <div className='Information_MainTitle' style={{marginTop : '76px'}}>개막식 & 총학생회 발대식</div>
                            <div className='Information_DisplaySet'>
                                <div style={{marginRight : '10px'}}>
                                    <div className="Time_Icon">{<img src={ColorTime} alt='' style={{width:"12px", height:"12px"}}/>}</div>
                                    <div className='Information_time'>19:30-19:37</div>
                                </div>
                                <div>
                                    <div className="Location_Icon"><img src={Location} alt='' style={{width:"12px", height:"12px"}}/></div>
                                    <div className='Information_SubTitle'>노천극장</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='InformationBox3'>
                        <div className='Information_TextBox'>
                            <div className='Information_MainTitle' style={{marginTop : '10px'}}>학생회 이벤트 (무비 인 더 캠핑)</div>
                            <div className='Information_DisplaySet'>
                                <div style={{marginRight : '10px'}}>
                                    <div className="Time_Icon">{<img src={ColorTime} alt='' style={{width:"12px", height:"12px"}}/>}</div>
                                    <div className='Information_time'>19:40-20:25</div>
                                </div>
                                <div>
                                    <div className="Location_Icon"><img src={Location} alt='' style={{width:"12px", height:"12px"}}/></div>
                                    <div className='Information_SubTitle'>노천극장</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='InformationBox4'>
                        <div className='Information_TextBox'>
                            <div className='Information_MainTitle' style={{marginTop : '7px'}}>동아리 공연</div>
                            <div className='Information_DisplaySet'>
                                <div style={{marginRight : '10px'}}>
                                    <div className="Time_Icon">{<img src={ColorTime} alt='' style={{width:"12px", height:"12px"}}/>}</div>
                                    <div className='Information_time'>20:25-21:00</div>
                                </div>
                                <div>
                                    <div className="Location_Icon"><img src={Location}alt='' style={{width:"12px", height:"12px"}}/></div>
                                    <div className='Information_SubTitle'>노천극장</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='InformationBox5'>
                        <div className='Information_TextBox'>
                            <div className='Information_MainTitle' style={{marginTop : '7px'}}>연예인 초청 공연</div>
                            <div className='Information_DisplaySet'>
                                <div style={{marginRight : '10px'}}>
                                    <div className="Time_Icon">{<img src={ColorTime} alt='' style={{width:"12px", height:"12px"}}/>}</div>
                                    <div className='Information_time'>21:00-22:00</div>
                                </div>
                                <div>
                                    <div className="Location_Icon"><img src={Location} alt='' style={{width:"12px", height:"12px"}}/></div>
                                    <div className='Information_SubTitle'>노천극장</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailTable1;
