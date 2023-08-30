import React from 'react';
import HeaderContainer from '../components/container/common/HeaderContainer';
import CreatorList from '../components/container/CreatorPage/CreatorList';
import Footer from '../components/common/Footer';


const CreatorPage = () => {
    return (
        <>
            <HeaderContainer />
            <CreatorList />
            <Footer/>
        </>
    );
};

export default CreatorPage;