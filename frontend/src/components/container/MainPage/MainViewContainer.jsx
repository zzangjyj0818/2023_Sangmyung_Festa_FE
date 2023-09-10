import React, { useState, useEffect } from 'react';
import MainView from '../../presentation/MainPage/MainView';
import { fetchCount } from '../../../api/fetchCount';

const MainViewContainer = () => {
    const [count, setCount] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        fetchCount({setError, setCount, setLoading});
      }, []);
    
    return (
        <MainView 
            count={count}
            loading={loading}
            error={error}
        />
    );
};

export default MainViewContainer;