import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { postBoxState } from '../../../api/postBoxState';
import BoxChange from '../../presentation/AdminPage/BoxChange';

const datas = [
    {
        id : 1,
        name : 'BOX1'
    },
    {
        id : 2,
        name : 'BOX2'
    },
    {
        id : 3,
        name : 'BOX3'
    },
    {
        id : 4,
        name : 'BOX4'
    },
]

const BoxChangeContainer = ({box1, box2, box3, box4}) => {
    const [boxesState, setBoxesState] = useState({
        state1: box1,
        state2: box2,
        state3: box3,
        state4: box4
    });
  
    const mutation = useMutation(postBoxState,{
      onSuccess: (data) => {
          console.log('success')
      },
      onError: () => {
      }
    });
  
    const onClick = (id) => {
        setBoxesState(prevState => ({
            ...prevState,
            [`state${id}`]: !prevState[`state${id}`]
        }));
        mutation.mutate({idx: id});
    }
    return (
        <BoxChange 
            datas={datas}
            boxesState={boxesState}
            onClick={onClick}
        />
    );
};

export default BoxChangeContainer;