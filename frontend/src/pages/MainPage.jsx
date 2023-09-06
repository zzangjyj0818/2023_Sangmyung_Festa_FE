import React from 'react';
import HeaderContainer from '../components/container/common/HeaderContainer';
import MainView from '../components/presentation/MainPage/MainView';
import EventView from '../components/presentation/MainPage/EventView';
import CreatorView from '../components/presentation/MainPage/CreatorView';
import BoothViewContainer from '../components/container/MainPage/BoothViewContainer';
import Footer from '../components/common/Footer';
import '../styles/pages/common.scss';
import TimelineViewContainer from '../components/container/MainPage/TimelineViewContainer';

const MainPage = () => {
    return (
        <div className='slide-in'>
            <HeaderContainer name = {undefined} type = {2} opacity={true}/>
            <MainView/>
            <div style={{height:'100vh'}}>
                <EventView/>
                <TimelineViewContainer />
            </div>
            <div style={{height:'100vh'}}>
                <BoothViewContainer />
                <CreatorView />
            </div>
            <Footer /> 
        </div>
    );
};

export default MainPage;