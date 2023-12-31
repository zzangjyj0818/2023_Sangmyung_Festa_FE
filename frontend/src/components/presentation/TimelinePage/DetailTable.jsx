import React from 'react';
import Box from './Box';
import '../../../styles/components/TimelinePage/DetailTable.scss';
import Time from '../../../assets/TimelinePage/carbon_time.webp';
import CheckIcon from '../../../assets/TimelinePage/clarity_event-line.webp';


const DetailTable = ({selectedDate, tableDatas, times, activeTimeIndex}) => {

    return (
        <div className='DetailTable_Container'>
            <div className='DetailTable_Wrapper'>
                <div className='DetailTable_TimeList'>
                    <div className='TimeList_Title'>
                        <div>{<img src={Time} alt='' style={{width:"14px", height:"14px"}}/>}</div>
                        <div className="Time_text"> 시간</div>
                    </div>
                    <div className='TimeList_items'>
                        {times.map((time, index) =>
                            <div className='items_wrapper' key={index}>
                                <div className='TimeList_item'>{(time === "13:00" || time === 
                                "15:30") ? '' : time}</div>
                                <div 
                                    className='item_circle' 
                                    style={selectedDate === "9.25 (월)" ? {
                                        backgroundColor:
                                            new Date().getMonth() === 8 && new Date().getDate() === 25 ?
                                            (activeTimeIndex === index ? '#4F75FF' :
                                            activeTimeIndex >= index ? '#C7E7FF' : 'lightgray') : 'lightgray'
                                    } : {
                                        backgroundColor:
                                            new Date().getMonth() === 8 && new Date().getDate() === 26 ?
                                            (activeTimeIndex === index ? '#4F75FF' :
                                            activeTimeIndex >= index ? '#C7E7FF' : 'lightgray') : 'lightgray'
                                    } }
                                />
                            </div>
                        )}
                    </div>
                </div>
                <div className='DetailTable_HorizonBar'></div>
                <div className='DetailTable_HorizonBar2'></div>
                <div className='DetailTable_InformationList'>
                    <div className='InformationList_Title'>
                        <div>{<img src={CheckIcon} alt='' style={{width:"14px", height:"14px"}}/>}</div>
                        <div className="Information_text"> 이벤트</div>
                    </div>
                    <div className='Box_Collection'>
                        {tableDatas.map(tabledata => <Box key={tabledata.id} tableData={tabledata} layout = {tabledata.layout}/>)}
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default DetailTable;
