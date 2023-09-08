import React from 'react';
import HeaderContainer from '../components/container/common/HeaderContainer';
import Footer from '../components/common/Footer';
import ComponentAssembly from '../components/presentation/TimelinePage/ComponentAssembly';
import '../styles/pages/TimelinePage.scss';
import '../styles/pages/common.scss';

const TimelinePage = () => {
    return (
        <div className='slide-in'>
            <div className='TimelinePage_Container'>
                <HeaderContainer name = {'타임테이블'} type = {2} opacity={false}/>
            </div>
            <ComponentAssembly />
            <Footer />
        </div>
    );
};

export default TimelinePage;