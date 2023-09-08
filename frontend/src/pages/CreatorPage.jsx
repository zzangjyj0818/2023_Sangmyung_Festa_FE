import React from 'react';
import HeaderContainer from '../components/container/common/HeaderContainer';
import CreatorList from '../components/container/CreatorPage/CreatorList';
import Footer from '../components/common/Footer';
import '../styles/pages/common.scss';


const CreatorPage = () => {
    return (
        <div className='slide-in'>
            <HeaderContainer name = {undefined} type = {1} opacity={false}/>
            <CreatorList />
            <Footer/>
        </div>
    );
};

export default CreatorPage;