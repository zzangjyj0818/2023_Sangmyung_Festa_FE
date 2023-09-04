import React from 'react';
import Time from '../../../assets/MainPage/time.png'
import '../../../styles/components/MainPage/TimelineView.scss';

const TimelineView = () => {
    return (
        <div className='TimelineView_Container'>
            <div className='TimelineView_Wrapper'>
                <div className='TimelineView_TextBox'>
                    <div className='TimelineView_Text' style={{width: '150px', marginRight: '143px', marginLeft:'14px'}}>⏰ 타임 테이블</div>
                    <div className='TimelineView_Text' style={{marginRight: '14px', marginLeft: 'auto'}}>{`>`}</div>
                </div>
                <div className='TimelineView_Box'>
                    <div className='TimelineView_BoxText'>
                        <div>축제 및 공연</div>
                        <div>일정표</div>
                    </div>
                    <div className='TimelineView_BoxImg'><img src={Time} alt='' /></div>
                </div>
            </div>
        </div>
    );
};

export default TimelineView;