import React from 'react';
import HeaderContainer from '../components/container/common/HeaderContainer';
import MainView from '../components/presentation/MainPage/MainView';
import EventView from '../components/presentation/MainPage/EventView';
import Footer from '../components/common/Footer';

const MainPage = () => {
    return (
        <>
            <HeaderContainer />
            <MainView/>
            <EventView/>
            {/* <Footer /> */}
        </>
    );
};

export default MainPage;