import React, { useState, useEffect } from 'react';
import MainView from '../../presentation/MainPage/MainView';
import { fetchCount } from '../../../api/fetchCount';

const MainViewContainer = () => {
    const [count, setCount] = useState(null);
    
    useEffect(() => {
        fetchCount({setCount});
      }, []);

      const numbers = count ? count.toLocaleString().split('') : []; // count 값이 있을 때만 toLocaleString() 호출
      const hour = new Date().getHours(); // 현재 시간(시) 가져오기
      const isNight = (hour >= 19); // 19시 이후인지 판단
    
    return (
        <MainView 
            numbers={numbers}
            isNight={isNight}
        />
    );
};

export default MainViewContainer;