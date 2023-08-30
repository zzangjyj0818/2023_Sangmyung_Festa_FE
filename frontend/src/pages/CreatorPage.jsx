import React from 'react';
import HeaderContainer from '../components/container/common/HeaderContainer';
import CreatorList from '../components/container/CreatorPage/CreatorList';
import Footer from '../components/container/common/Footer.jsx';
import '../styles/components/common/Footer.scss';


const CreatorPage = () => {
    return (
        <div>
            <HeaderContainer />
            <CreatorList />
            <div className="FooterPosition">
                <Footer />
            </div>
        </div>
    );
};

export default CreatorPage;