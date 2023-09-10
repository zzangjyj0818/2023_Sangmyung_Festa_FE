import React from 'react';
import HeaderContainer from '../components/container/common/HeaderContainer';
import EventCategory from '../components/presentation/EventPage/EventCategory';
import Footer from '../components/common/Footer';

const CreatorPage = () => {
    return (
        <div>
            <HeaderContainer name = {undefined} type = {1} opacity={false}/>
            <EventCategory />
            <Footer/>
        </div>
    );
};

export default CreatorPage;