import React from 'react';
import '../../../styles/components/TimelinePage/ComponentAssembly.scss'
import TableType from './TableType';

const ComponentAssembly = () => {
    return (
        <div className='ComponentAssembly_Container'>
            <div className='ComponentAssembly_Wrapper'>
                <TableType/>
            </div>
        </div>
    );
};

export default ComponentAssembly;