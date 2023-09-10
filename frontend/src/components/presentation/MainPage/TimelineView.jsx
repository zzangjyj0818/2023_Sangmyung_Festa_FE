import React from 'react';
import Time from '../../../assets/MainPage/time.png'
import '../../../styles/components/MainPage/TimelineView.scss';

const url = '/timeline'
const TimelineView = ({navigate}) => {
    return (
        <div className='TimelineView_Container'>
            <div className='TimelineView_Wrapper'>
                <div className='TimelineView_TextBox' onClick = {() => {window.scrollTo(0, 0); navigate(url);}}>
                    <div className='TimelineView_Text' style={{width: '150px', marginRight: '143px', marginLeft:'14px'}}>⏰ 타임 테이블</div>
                    <div className='TimelineView_Text' style={{marginRight: '14px', marginLeft: 'auto'}}>{`>`}</div>
                </div>
                <div className='TimelineView_Box' onClick = {() => {window.scrollTo(0, 0); navigate(url);}}>
                    <div className='TimelineView_BoxText'>
                        <div className="TimeLineView_BoxText1">축제 및 공연</div>
                        <div className="TimeLineView_BoxText2">일정표</div>
                    </div>
                    <div className='TimelineView_BoxImg'><img src={Time} alt='' /></div>
                </div>
            </div>
        </div>
    );
};

export default TimelineView;