import React from 'react';
import HeaderContainer from '../components/container/common/HeaderContainer';
import MainView from '../components/presentation/MainPage/MainView';
import EventView from '../components/presentation/MainPage/EventView';
import CreatorView from '../components/presentation/MainPage/CreatorView';
import Footer from '../components/common/Footer';

const MainPage = () => {
    return (
        <>
            <HeaderContainer name = {undefined} type = {2} opacity={true}/>
            <MainView/>
            <EventView/>
            <CreatorView/>
            <Footer />
        </>
    );
};

export default MainPage;