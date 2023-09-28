import React from 'react';
import HeaderContainer from '../components/container/common/HeaderContainer';
import Footer from '../components/common/Footer';
import TableTypeContainer from '../components/container/TimelinePage/TableTypeContainer';
import '../styles/pages/TimelinePage.scss';

const TimelinePage = () => {
    return (
        <>
            <div className='TimelinePage_Container'>
                <HeaderContainer name = {'타임테이블'} type = {2} opacity={false}/>
                <div className='TimelinePage_Wrapper'>
                    <TableTypeContainer />
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default TimelinePage;