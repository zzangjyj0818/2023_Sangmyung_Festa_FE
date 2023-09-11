import React from 'react';
import HeaderContainer from '../components/container/common/HeaderContainer';
import Footer from '../components/common/Footer';
import EventCategoryContainer from '../components/container/EventPage/EventCategoryContainer';

const CreatorPage = () => {
    return (
        <div>
            <HeaderContainer name = {undefined} type = {1} opacity={false}/>
            <EventCategoryContainer />
            <Footer/>
        </div>
    );
};

export default CreatorPage;