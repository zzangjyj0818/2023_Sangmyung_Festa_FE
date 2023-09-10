import React, {useState, useEffect} from 'react';
import NumberBox from '../../presentation/MainPage/NumberBox';

const NumberBoxContainer = ({value, index}) => {
    const [isVisible, setIsVisible] = useState(false); // 초기 상태는 보이지 않음
    const delay = `${index * 0.5}s`; // index에 따라 다른 딜레이 설정

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true); // 일정 시간 후에 보여지게 설정
        }, index * 500); // index에 따라 다른 딜레이 설정

        return () => clearTimeout(timer); // 컴포넌트 unmount 시 타이머 제거
    }, [index]);
    return (
        <NumberBox
            value={value}
            index={index}
            isVisible={isVisible}
            delay={delay}
        /> 
    );
};

export default NumberBoxContainer;