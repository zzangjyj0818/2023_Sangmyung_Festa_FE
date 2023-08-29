import React, { useEffect, useState } from 'react';
import Odometer from 'react-odometerjs';

const MainView = () => {
    const [value, setValue] = useState(14);

    useEffect(() => {
        const timeoutId = setTimeout(() => setValue(41), 5000);
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    return <Odometer value={value}style={{ cursor: 'pointer' }}format="(.ddd),dd" />;
}

export default MainView;