import React from 'react';
import HeaderContainer from '../components/container/common/HeaderContainer';
import LoginModal from '../components/presentation/AdminPage/LoginModal';
import TicketChange from '../components/presentation/AdminPage/TicketChange';
import BoxChange from '../components/presentation/AdminPage/BoxChange';
import DressCodeChange from '../components/presentation/AdminPage/DressCodeChange';
import Footer from '../components/common/Footer';

const AdminPage = ({isOpen, setIsOpen, all}) => {
    return (
        <>
            <HeaderContainer name = {undefined} type = {1} opacity={false}/>
            {
                isOpen === true ? <LoginModal isOpen={isOpen} setIsOpen={setIsOpen} /> :
                <>
                    <TicketChange ticket = {all.ticket}/>
                    <BoxChange box1 = {all.box1} box2 = {all.box2} box3 = {all.box3} box4 = {all.box4}/>
                    <DressCodeChange dress1 = {all.dress1} dress2 = {all.dress2}/>
                </>
            }

            <Footer />
        </>
    );
};

export default AdminPage;