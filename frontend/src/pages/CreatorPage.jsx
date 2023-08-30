import React from 'react';
import HeaderContainer from '../components/container/common/HeaderContainer';
import CreatorList from '../components/container/CreatorPage/CreatorList';
import Footer from '../components/common/Footer';


const CreatorPage = () => {
    return (
        <div>
            <HeaderContainer />
            <CreatorList />
            <Footer/>
        </div>
    );
};

export default CreatorPage;