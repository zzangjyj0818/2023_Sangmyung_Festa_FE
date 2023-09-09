import React from 'react';
import HeaderContainer from '../components/container/common/HeaderContainer';
import CreatorList from '../components/presentation/CreatorPage/CreatorList';
import Footer from '../components/common/Footer';

const CreatorPage = () => {
    return (
        <>
            <HeaderContainer name = {undefined} type = {1} opacity={false}/>
            <CreatorList />
            <Footer/>
        </>
    );
};

export default CreatorPage;