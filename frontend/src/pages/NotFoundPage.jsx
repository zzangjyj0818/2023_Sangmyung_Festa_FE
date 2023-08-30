import React from 'react';
import HeaderContainer from '../components/container/common/HeaderContainer';
import Footer from '../components/common/Footer';
import '../styles/pages/NotFoundPage.scss';

const NotFoundPage = () => {
    return (
        <>
            <HeaderContainer name = {undefined} type = {1}/>
            <div className='NotFoundPage_Container'>
                <div className='NotFoundPage_Wrapper'>
                    <div className='NotFoundPage_Text'>
                        요청하신 페이지를 찾을 수 없습니다.
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default NotFoundPage;