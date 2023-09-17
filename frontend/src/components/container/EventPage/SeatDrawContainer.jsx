import React from 'react';
import { useQuery } from 'react-query';
import { fetchTicket } from '../../../api/fetchTicket';
import SeatDraw from '../../presentation/EventPage/SeatDraw';

const SeatDrawContainer = () => {
    const { data: ticket, refetch} = useQuery('ticket', fetchTicket, {
        staleTime: 1000 * 60 * 1, // 캐시된 데이터가 5분 동안 신선한 상태로 유지됩니다.
        refetchOnWindowFocus: false,
        retry: false,
      });

    let month = new Date().getMonth()+1;
    let days = new Date().getDate();

    return (
        <SeatDraw 
            month={month} 
            days={days} 
            ticket={ticket}
        />
    );
};

export default SeatDrawContainer;