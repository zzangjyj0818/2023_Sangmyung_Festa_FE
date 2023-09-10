import React, { useEffect, useState } from 'react';
import '../../../styles/components/MainPage/NumberBox.scss';

const NumberBox = ({value, index}) => {

    // Enable Code Spliting !! 
    const [isVisible, setIsVisible] = useState(false); // 초기 상태는 보이지 않음
    const delay = `${index * 0.5}s`; // index에 따라 다른 딜레이 설정

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true); // 일정 시간 후에 보여지게 설정
        }, index * 500); // index에 따라 다른 딜레이 설정

        return () => clearTimeout(timer); // 컴포넌트 unmount 시 타이머 제거
    }, [index]);

    return (
        <div className='NumberBox_Container'>
            <div className='NumberBox_Wrapper' style={{ visibility: isVisible ? 'visible' : 'hidden' , animationDelay: delay}}>
                <div style={{ animationDelay: delay}}>{value}</div>
            </div>
            <div className='Number_Box_Box'></div>
            <div className='Number_Box_Box'></div>
            <div className='Number_Box_Box'></div>
        </div>
    );
};

export default NumberBox;
