import React from 'react';
import '../../../styles/components/TimelinePage/DetailTable2.scss';


const times = ['10:00','12:00','14:00','16:00','18:00', '20:00','22:00'];

const DetailTable2 = () => {

    return (
        <div className='DetailTable2_Container'>
            <div className='DetailTable2_TimeList'>
                <div className='TimeList2_Title'>
                    <div>{/* Clock Icon */}</div>
                    <div>시간</div>
                </div>
                <div className='TimeList2_items'>
                    {times.map(time => 
                        <div className='items_wrapper2'>
                            <div className='TimeList_item2'>{time}</div>
                            <div className='item_circle2'></div>
                        </div>
                    )}
                </div>
            </div>
                <div className='DetailTable2_HorizonBar'></div>
            <div className='DetailTable2_InformationList'>
                <div className='InformationList_Title2'>
                    <div>{/* Information Icon */}</div>
                    <div>이벤트</div>
                </div>
                <div className='Box_Collection2'>
                    <div className='Information2Box1'>

                    </div>
                    <div className='Information2Box2'>

                    </div>
                    <div className='Information2Box3'>

                    </div>
                    <div className='Information2Box4'>

                    </div>
                    <div className='Information2Box5'>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailTable2;