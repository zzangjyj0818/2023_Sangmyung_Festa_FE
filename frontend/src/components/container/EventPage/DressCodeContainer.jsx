import React, { useState, useEffect} from 'react';
import { useQuery } from 'react-query';
import { fetchDressCode } from '../../../api/fetchDressCode';
import DressCode from '../../presentation/EventPage/DressCode';
import { textArray2 } from './dataSet';

const initialDatas = [
    {
        id : 1,
    },
    {
        id : 2,
    },
];

const DressCodeContainer = () => {
    const { data: dress } = useQuery('dressState', fetchDressCode, {
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        retry: false,
      });
    const [datas, setDatas] = useState(initialDatas);
 
    useEffect(() => {
       if (dress) {
        console.log(dress);
          const newDatas = datas.map((data, index) => ({
             ...data,
            dress : dress[`dress${index + 1}`],
          }));
          console.log(newDatas);
          setDatas(newDatas);
       }
    }, [dress]);
    return (
        <DressCode 
            datas={datas}
            textArray2={textArray2}
        />
    );
};

export default DressCodeContainer;