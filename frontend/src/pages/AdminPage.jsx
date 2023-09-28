import React from 'react';
import HeaderContainer from '../components/container/common/HeaderContainer';
import LoginModalContainer from '../components/container/AdminPage/LoginModalContainer';
import BoxChangeContainer from '../components/container/AdminPage/BoxChangeContainer';
import DressCodeChangeContainer from '../components/container/AdminPage/DressCodeChangeContainer';
import Footer from '../components/common/Footer';
import TicketChangeContainer from '../components/container/AdminPage/TicketChangeContainer';


const AdminPage = ({isOpen, setIsOpen, all}) => {
    return (
        <>
            <HeaderContainer name = {undefined} type = {1} opacity={false}/>
            {
                isOpen === true ? <LoginModalContainer isOpen={isOpen} setIsOpen={setIsOpen} /> :
                <>
                    <TicketChangeContainer ticket = {all.ticket}/>
                    <BoxChangeContainer box1 = {all.box1} box2 = {all.box2} box3 = {all.box3} box4 = {all.box4}/>
                    <DressCodeChangeContainer dress1 = {all.dress1} dress2 = {all.dress2}/>
                </>
            }
            <Footer />
        </>
    );
};

export default AdminPage;