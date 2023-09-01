import React from 'react';
import '../../../styles/components/TimelinePage/DetailTable2.scss';


const times = ['10:00','12:00','14:00','16:00','18:00', '20:00','22:00'];

const DetailTable2 = () => {

    return (
        <div className='DetailTable1_Container'>
            <div className='DetailTable1_TimeList'>
                <div className='TimeList_Title'>
                    <div>{/* Clock Icon */}</div>
                    <div>시간</div>
                </div>
                <div className='TimeList_items'>
                    {times.map(time => 
                        <div className='items_wrapper'>
                            <div className='TimeList_item'>{time}</div>
                            <div className='item_circle'></div>
                        </div>
                    )}
                </div>
            </div>
                <div className='DetailTable1_HorizonBar'></div>
            <div className='DetailTable1_InformationList'>
                <div className='InformationList_Title'>
                    <div>{/* Information Icon */}</div>
                    <div>이벤트</div>
                </div>
                <div className='Box_Collection'>
                    <div className='InformationBox1'>

                    </div>
                    <div className='InformationBox2'>

                    </div>
                    <div className='InformationBox3'>

                    </div>
                    <div className='InformationBox4'>

                    </div>
                    <div className='InformationBox5'>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailTable2;
