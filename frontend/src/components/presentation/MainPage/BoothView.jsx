import React from 'react';
import '../../../styles/components/MainPage/TimelineView.scss';

const TimelineView = () => {
    return (
        <div className='TimelineView_Container'>
            <div className='TimelineView_Wrapper'>
                <div className='TimelineView_TextBox'>
                    <div className='TimelineView_Text' style={{width: '150px', marginRight: '143px', marginLeft:'14px'}}>🎉 부스/행사</div>
                    <div className='TimelineView_Text' style={{marginRight: '14px', marginLeft: 'auto'}}>{`>`}</div>
                </div>
                <div className='TimelineView_Box'>
                    부스/행사
                </div>
            </div>
        </div>
    );
};

export default TimelineView;