import React from 'react';
import HeaderContainer from '../components/container/common/HeaderContainer';
import LoginModal from '../components/container/AdminPage/LoginModal';
import TicketChange from '../components/container/AdminPage/TicketChange';
import BoxChange from '../components/container/AdminPage/BoxChange';
import DressCodeChange from '../components/container/AdminPage/DressCodeChange';
import Footer from '../components/common/Footer';

const AdminPage = () => {
    return (
        <>
            <HeaderContainer name = {undefined} type = {1} opacity={false}/>
            <LoginModal />
            <TicketChange />
            <BoxChange />
            <DressCodeChange />
            <Footer />
        </>
    );
};

export default AdminPage;