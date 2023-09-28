import React from 'react';
import { useNavigate } from 'react-router';
import BoothView from '../../presentation/MainPage/BoothView'

const BoothViewContainer = () => {
    const navigate = useNavigate();
    return (
        <BoothView navigate={navigate} />
    );
};

export default BoothViewContainer;