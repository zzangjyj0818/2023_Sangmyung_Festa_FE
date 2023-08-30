import React from 'react';
import HeaderContainer from '../components/container/common/HeaderContainer';
import MainView from '../components/presentation/MainPage/MainView';
import Footer from '../components/common/Footer';

const MainPage = () => {
    return (
        <>
            <HeaderContainer />
            <MainView/>
            <Footer />
        </>
    );
};

export default MainPage;