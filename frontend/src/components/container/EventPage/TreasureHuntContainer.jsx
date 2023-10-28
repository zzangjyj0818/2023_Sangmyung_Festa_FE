import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { fetchBoxState } from '../../../api/fetchBoxState';
import { textArray } from './dataSet';
import TreasureHunt from '../../presentation/EventPage/TreasureHunt';

const initialDatas = [
    {
        id : 1,
        tag : 'A'
    },
    {
        id : 2,
        tag : 'B'
    },
    {
        id : 3,
        tag : 'C'
    },
    {
        id : 4,
        tag : 'D'
    }
];

export const upOpenBoxCount = (datas) => {
    let count = 0;
    for(let i = 0; i < datas.length; i++) {
    if(datas[i].open) count++; 
    }
    
    return count;
}

const TreasureHuntContainer = () => {
    const { data: box } = useQuery('boxState', fetchBoxState, {
        staleTime: 1000 * 60 * 1, 
        refetchOnWindowFocus: false,
        retry: false,
      });
       const [datas, setDatas] = useState(initialDatas);
    
       useEffect(() => {
          if (box) {
             const newDatas = datas.map((data, index) => ({
                ...data,
                open: box[`box${index + 1}`],
             }));
             setDatas(newDatas);
          }
       }, [box]);
    return (
        <TreasureHunt 
            datas={datas}
            textArray={textArray}
        />
    );
};

export default TreasureHuntContainer;