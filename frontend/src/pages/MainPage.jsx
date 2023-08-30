import React from 'react';
import HeaderContainer from '../components/container/common/HeaderContainer';
import MainView from '../components/presentation/MainPage/MainView';
import EventView from '../components/presentation/MainPage/EventView';
import Footer from '../components/common/Footer';
import '../styles/pages/MainPage.scss';

const MainPage = () => {
    return (
        <>
            <HeaderContainer name = {undefined} type = {2} opacity={true}/>
            <MainView/>
            <div>
                <EventView/>
            </div> 
            <Footer /> 
        </>
    );
};

export default MainPage;