import React from 'react';
import '../../../styles/components/AdminPage/TicketChange.scss';

const TicketChange = ({count, ticket, handleChange, onClick}) => {
    
    return (
        <div className='TicketChange_Container'>
            <div className='TicketChange_Wrapper'>
                <div className='TicketChange_DataForm'>
                    <div className='TicketChange_DataForm_Title'>티켓 수</div>
                    <input
                        type = 'number'
                        value={count}
                        placeholder={ticket}
                        onChange={handleChange}
                        className='TicketChange_DataForm_InputForm'
                    />
                </div>
                <div className='TicketChange_DataForm_SubmitBtn_LayOut'>
                    <button
                        className='TicketChange_DataForm_SubmitBtn'
                        type='submit'
                        onClick={onClick}
                    >
                        티켓 수 변경
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TicketChange;
