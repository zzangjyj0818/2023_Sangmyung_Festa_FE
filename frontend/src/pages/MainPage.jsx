import React from 'react';
import HeaderContainer from '../components/container/common/HeaderContainer';
import MainView from '../components/presentation/MainPage/MainView';
import EventView from '../components/presentation/MainPage/EventView';
import TimelineView from '../components/presentation/MainPage/TimelineView';
import CreatorView from '../components/presentation/MainPage/CreatorView';
import Footer from '../components/common/Footer';
import '../styles/pages/MainPage.scss';

const MainPage = () => {
    return (
        <>
            <HeaderContainer name = {undefined} type = {2} opacity={true}/>
            <MainView/>
            <div style={{height:'100vh'}}>
                <EventView/>
                <TimelineView />
            </div>
            <div style={{height:'100vh'}}>
                <CreatorView />
            </div>
            <Footer /> 
        </>
    );
};

export default MainPage;