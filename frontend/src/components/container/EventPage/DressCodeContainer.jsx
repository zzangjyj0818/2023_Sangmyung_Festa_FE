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
        staleTime: 1000 * 60 * 1, // 캐시된 데이터가 5분 동안 신선한 상태로 유지됩니다.
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