import React from 'react';
import '../../../styles/components/AdminPage/TicketChange.scss';

const TicketChange = () => {
    return (
        <div className='TicketChange_Container'>
            <div className='TicketChange_Wrapper'>
                <div className='TicketChange_DataForm'>
                    <div className='TicketChange_DataForm_Title'>티켓 수</div>
                    <input
                        type = 'number'
                        placeholder='티켓 수 입력'
                        // value={e.target.value}
                        className='TicketChange_DataForm_InputForm'
                    />
                </div>
                <div className='TicketChange_DataForm_SubmitBtn_LayOut'>
                    <button
                        className='TicketChange_DataForm_SubmitBtn'
                        type='submit'
                        >티켓 수 변경
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TicketChange;