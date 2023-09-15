import React, {useState} from 'react';
import { postDressCode } from '../../../api/postDressCode';
import { useMutation } from 'react-query';
import DressCodeChange from '../../presentation/AdminPage/DressCodeChange';

const datas = [
    {
        id : 1,
        name : '야광봉'
    },
    {
        id : 2,
        name : '타투 스티커'
    },
]

const DressCodeChangeContainer = ({dress1, dress2}) => {

    const [boxesState, setBoxesState] = useState({
        state1: dress1,
        state2: dress2,
    });
  
    const mutation = useMutation(postDressCode,{
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
        <DressCodeChange 
            datas={datas}
            boxesState={boxesState}
            onClick={onClick}
        />
    );
};

export default DressCodeChangeContainer;