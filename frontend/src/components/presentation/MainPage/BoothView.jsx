import React from 'react';
import Truck from '../../../assets/MainPage/deliverytruckyellow.png'
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
                    <div className='TimelineView_BoxText'>
                        <div className="TimeLineView_BoxText1">부스 &</div>
                        <div className="TimeLineView_BoxText2">푸드트럭</div>
                    </div>
                    <div className='TimelineView_BoxImg' style={{marginTop: 'auto'}}><img src={Truck} alt='' /></div>
                </div>
            </div>
        </div>
    );
};

export default TimelineView;