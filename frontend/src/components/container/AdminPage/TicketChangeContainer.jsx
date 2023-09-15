import React, {useState} from 'react';
import { useMutation } from 'react-query';
import { postTicket } from '../../../api/postTicket';
import TicketChange from '../../presentation/AdminPage/TicketChange';

const TicketChangeContainer = ({ticket}) => {
    const [count, setCount] = useState();

    const mutation = useMutation(postTicket,{
        onSuccess: (data) => {
            console.log('success')
        },
        onError: () => {
        }
      });
    
    const onClick = () => {
        mutation.mutate({count : count});
    }

    const handleChange = (e) => {
      setCount(e.target.value);
    }

    return (
        <TicketChange 
            count={count}
            ticket={ticket}
            handleChange={handleChange}
            onClick={onClick}
        />
    );
};

export default TicketChangeContainer;