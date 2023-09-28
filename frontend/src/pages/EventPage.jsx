import React from 'react';
import HeaderContainer from '../components/container/common/HeaderContainer';
import Footer from '../components/common/Footer';
import EventCategoryContainer from '../components/container/EventPage/EventCategoryContainer';

const EventPage = () => {
    return (
        <>
            <HeaderContainer name = {undefined} type = {1} opacity={false}/>
            <EventCategoryContainer />
            <Footer/>
        </>
    );
};

export default EventPage;