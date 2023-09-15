import React from 'react';
import HeaderContainer from '../components/container/common/HeaderContainer';
import LoginModal from '../components/presentation/AdminPage/LoginModal';
import TicketChange from '../components/presentation/AdminPage/TicketChange';
import BoxChange from '../components/presentation/AdminPage/BoxChange';
import DressCodeChange from '../components/presentation/AdminPage/DressCodeChange';
import Footer from '../components/common/Footer';

const AdminPage = ({isOpen, setIsOpen}) => {
    console.log(isOpen);
    return (
        <>
            <HeaderContainer name = {undefined} type = {1} opacity={false}/>
            {
                isOpen === true ? <LoginModal isOpen={isOpen} setIsOpen={setIsOpen} /> :
                <>
                    <TicketChange />
                    <BoxChange />
                    <DressCodeChange />
                </>
            }

            <Footer />
        </>
    );
};

export default AdminPage;