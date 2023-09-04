import React from 'react';
import '../../../styles/components/TimelinePage/ComponentAssembly.scss'
import TableType from './TableType';
import SlideShow from './SlideShow';

const ComponentAssembly = () => {
    return (
        <div className='ComponentAssembly_Container'>
            <div className='ComponentAssembly_Wrapper'>
                <TableType/>
                <SlideShow/>
            </div>
        </div>
    );
};

export default ComponentAssembly;