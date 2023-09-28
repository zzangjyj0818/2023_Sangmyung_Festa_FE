import React from 'react';
import HeaderContainer from '../components/container/common/HeaderContainer';
import EventView from '../components/presentation/MainPage/EventView';
import CreatorView from '../components/presentation/MainPage/CreatorView';
import BoothViewContainer from '../components/container/MainPage/BoothViewContainer';
import Footer from '../components/common/Footer';
import TimelineViewContainer from '../components/container/MainPage/TimelineViewContainer';
import MainViewContainer from '../components/container/MainPage/MainViewContainer';

const MainPage = () => {
    return (
        <>
            <HeaderContainer name = {undefined} type = {2} opacity={true}/>
            <MainViewContainer/>
            <div style={{height:'calc(var(--vh, 1vh) * 100)'}}>
                <EventView/>
                <TimelineViewContainer />
            </div>
            <div style={{height:'calc(var(--vh, 1vh) * 100)'}}>
                <BoothViewContainer />
                <CreatorView />
            </div>
            <Footer /> 
        </>
    );
};

export default MainPage;