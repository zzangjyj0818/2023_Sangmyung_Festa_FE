import React from 'react';
import HeaderContainer from '../components/container/common/HeaderContainer';
import Footer from '../components/common/Footer';
import CreatorListContainer from '../components/container/CreatorPage/CreatorListContainer';

const CreatorPage = () => {
    return (
        <>
            <HeaderContainer name = {undefined} type = {1} opacity={false}/>
            <CreatorListContainer />
            <Footer/>
        </>
    );
};

export default CreatorPage;