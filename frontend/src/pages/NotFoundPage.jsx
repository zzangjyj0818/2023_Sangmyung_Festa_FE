import React from 'react';
import HeaderContainer from '../components/container/common/HeaderContainer';
import '../styles/pages/NotFoundPage.scss';

const NotFoundPage = () => {
    return (
        <>
            <HeaderContainer />
            <div className='NotFoundPage_Container'>
                <div className='NotFoundPage_Wrapper'>
                    <div className='NotFoundPage_Text'>
                        요청하신 페이지를 찾을 수 없습니다.
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotFoundPage;