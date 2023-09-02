import React, { useState } from 'react';
import DetailTable1 from './DetailTable1.jsx';
import DetailPerformance1 from './DetailPerformance1.jsx'; 

import '../../../styles/components/TimelinePage/TableType.scss';

const TableType = () => {
    const [selectedType, setSelectedType] = useState('festival'); // 기본값으로 'festival' 설정


    const handleOnClick = (type) => {
        setSelectedType(type);
    }

    return (
        <div className='TableType_Container'>
            <div className='type_buttons'>
                <button style={{color: selectedType === 'festival' ? '#4F75FF' : '', borderBottom: selectedType === 'festival' ? '2px solid #4F75FF' : ''}} onClick={() => handleOnClick('festival')}>축제</button>
                <button style={{color: selectedType === 'performance' ? '#4F75FF' : '', borderBottom: selectedType === 'performance' ? '2px solid #4F75FF' : ''}} onClick={() => handleOnClick('performance')}>공연</button>
            </div>
            {selectedType === 'festival' && <DetailTable1 />}
            {selectedType === 'performance' && <DetailPerformance1 />}
        </div>
    );
    
};

export default TableType;
