import React from 'react';
import { useQuery } from 'react-query';
import MainView from '../../presentation/MainPage/MainView';
import { fetchCount } from '../../../api/fetchCount';

const MainViewContainer = () => {
    const { data: count, refetch} = useQuery('count', fetchCount, {
        staleTime: 1000 * 60 * 0.05,
    });

      const numbers = count ? count.toLocaleString().split('') : []; // count 값이 있을 때만 toLocaleString() 호출
      const hour = new Date().getHours(); // 현재 시간(시) 가져오기
      const isNight = (hour >= 19 || hour < 6); // 19시 이후인지 판단
    
    return (
        <MainView 
            numbers={numbers}
            isNight={isNight}
        />
    );
};

export default MainViewContainer;