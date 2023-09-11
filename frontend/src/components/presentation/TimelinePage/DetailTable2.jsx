import React, { useState, useEffect } from 'react';
import '../../../styles/components/TimelinePage/DetailTable2.scss';
import Time from '../../../assets/TimelinePage/carbon_time.svg';
import CheckIcon from '../../../assets/TimelinePage/clarity_event-line.svg';

import data from '../../container/TimelinePage/BoxdataSet';
import InformationTextBox from '../../container/TimelinePage/InformationTextBox'; 
import { getCurrentTimeIndex } from '../../container/TimelinePage/CurrentTimeIndex';


const times = ['10:00','12:00','14:00','16:00','18:00', '20:00','22:00'];

const DetailTable2 = () => {
    const [activeTimeIndex, setActiveTimeIndex] = useState(0);

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
        <div className='DetailTable2_Container'>
            <div className='DetailTable2_TimeList'>
                <div className='TimeList_Title'>
                    <div>{<img src={Time} alt='' style={{width:"14px", height:"14px"}}/>}</div>
                    <div className="Time_text"> 시간</div>
                    <div>{<img src={CheckIcon} alt='' style={{width:"14px", height:"14px"}}/>}</div>
                    <div className="Information_text"> 이벤트</div>
                </div>
                <div className='TimeList_items'>
                    {times.map((time, index) =>
                        <div className='items_wrapper' key={index}>
                            <div className='TimeList_item'>{time}</div>
                            <div 
                                className='item_circle' 
                                style={{
                                    backgroundColor:
                                        new Date().getMonth() === 8 && new Date().getDate() === 11 ?
                                        (activeTimeIndex === index ? '#4F75FF' :
                                        activeTimeIndex >= index ? '#C7E7FF' : 'lightgray') : 'lightgray'
                                }}
                            />
                        </div>
                    )}
                </div>
            </div>

            <div className='DetailTable2_HorizonBar'></div>
            <div className='DetailTable2_InformationList'>
                <div className='Box_Collection'>
                    <div className='InformationBox1'>
                        <InformationTextBox 
                            key={0}
                            title={data[0].title}
                            time={data[0].time}
                            location={data[0].location} 
                        />
                    </div>

                    <div className='InformationBox2'>
                        <InformationTextBox 
                            key={6}
                            title={data[6].title}
                            time={data[6].time}
                            location={data[6].location} 
                        />
                        <div className='InformationBox2_Text'>
                            <InformationTextBox
                                key={7}
                                title={data[7].title}
                                time={data[7].time}
                                location={data[7].location} 
                            />
                        </div>
                    </div>

                    <div className='InformationBox3'>
                        <InformationTextBox 
                            key={8}
                            title={data[8].title}
                            time={data[8].time}
                            location={data[8].location} 
                        />
                    </div>

                    <div className='InformationBox4'>
                        <InformationTextBox 
                            key={4}
                            title={data[4].title}
                            time={data[4].time}
                            location={data[4].location} 
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DetailTable2;
