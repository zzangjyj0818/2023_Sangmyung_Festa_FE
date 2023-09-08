import React from 'react';
import { useNavigate } from 'react-router';
import TimelineView from '../../presentation/MainPage/TimelineView';

const TimelineViewContainer = () => {
    const navigate = useNavigate();
    return (
        <TimelineView navigate={navigate} />
    );
};

export default TimelineViewContainer;