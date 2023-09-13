import React from 'react';
import LargeBox from './LargeBox';
import MediumBox from './MediumBox';
import SmallBox from './SmallBox';
import SpecialBox from './SpecialBox';
import '../../../styles/components/TimelinePage/DetailTable.scss';
import Time from '../../../assets/TimelinePage/carbon_time.svg';
import CheckIcon from '../../../assets/TimelinePage/clarity_event-line.svg';


const DetailTable = ({selectedDate, tableDatas, times, activeTimeIndex}) => {

    return (
        <div className='DetailTable_Container'>
            <div className='DetailTable_TimeList'>
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
                                style={selectedDate === "9.25 (월)" ? {
                                    backgroundColor:
                                        new Date().getMonth() === 8 && new Date().getDate() === 12 ?
                                        (activeTimeIndex === index ? '#4F75FF' :
                                        activeTimeIndex >= index ? '#C7E7FF' : 'lightgray') : 'lightgray'
                                } : {
                                    backgroundColor:
                                        new Date().getMonth() === 8 && new Date().getDate() === 13 ?
                                        (activeTimeIndex === index ? '#4F75FF' :
                                        activeTimeIndex >= index ? '#C7E7FF' : 'lightgray') : 'lightgray'
                                } }
                            />
                        </div>
                    )}
                </div>
            </div>
            <div className='DetailTable_HorizonBar'></div>
            <div className='DetailTable_InformationList'>
                <div className='InformationList_Title'>
                    <div>{<img src={CheckIcon} alt='' style={{width:"14px", height:"14px"}}/>}</div>
                    <div className="Information_text"> 이벤트</div>
                </div>
                <div className='Box_Collection'>
                    { selectedDate === "9.25 (월)" ? 
                        <>
                            <LargeBox tableData={tableDatas[0]}/>
                            <MediumBox tableData={tableDatas[1]}/>
                            <SmallBox tableData={tableDatas[2]}/>
                            <SmallBox tableData={tableDatas[3]}/>
                            <SmallBox tableData={tableDatas[4]}/> 
                        </> :
                        <>
                            <LargeBox tableData={tableDatas[0]}/>
                            <MediumBox tableData={tableDatas[1]}/>
                            <SmallBox tableData={tableDatas[2]}/>
                            <SpecialBox tableData={tableDatas[3]}/> 
                        </>
                        } 
                </div> 
            </div>
        </div>
    );
};

export default DetailTable;
