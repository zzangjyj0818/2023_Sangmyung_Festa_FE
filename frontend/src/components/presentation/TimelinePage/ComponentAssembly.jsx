import React from 'react';
import '../../../styles/components/TimelinePage/ComponentAssembly.scss'
import DetailTable1 from './DetailTable1';
import DetailTable2 from './DetailTable2';

const ComponentAssembly = () => {
    return (
        <div className='ComponentAssembly_Container'>
            <div className='ComponentAssembly_Wrapper'>
                <DetailTable1 />
                <DetailTable2 />
            </div>
        </div>
    );
};

export default ComponentAssembly;