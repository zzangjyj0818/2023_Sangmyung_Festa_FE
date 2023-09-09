import React from 'react';
import DetailTable1 from './DetailTable1.jsx';
import DetailTable2 from './DetailTable2.jsx';
import DetailPerformance1 from './DetailPerformance1.jsx'; 
import '../../../styles/components/TimelinePage/TableType.scss';
import { BsChevronUp, BsChevronDown } from "react-icons/bs"; 

const TableType = ({selectedType, selectedDate, showDropdown, setShowDropdown, handleOnClick, handleOnSelectChange}) => {
    return (
        <div className='TableType_Container'>
            <div className='type_buttons'>
                <button style={{color: selectedType === 'festival' ? '#4F75FF' : '', borderBottom: selectedType === 'festival' ? '2px solid #4F75FF' : ''}} onClick={() => handleOnClick('festival')}>축제</button>
                <button style={{color: selectedType === 'performance' ? '#4F75FF' : '', borderBottom: selectedType === 'performance' ? '2px solid #4F75FF' : ''}} onClick={() => handleOnClick('performance')}>공연</button>
            </div>
            <div className="dropdown">
                    <button 
                        onClick={() => setShowDropdown(!showDropdown)}
                        style={{
                            backgroundColor: showDropdown ? 'rgba(79, 117, 255, 0.70)' : '#FFF', // 드롭다운 메뉴가 열릴 경우 배경색 변경
                            color: showDropdown ? '#FFF' : 'black', // 드롭다운 메뉴가 열릴 경우 글자 색 변경 아님 black
                        }}
                        >
                        <div>
                            {selectedDate} {showDropdown ? <BsChevronUp size={17}/> : <BsChevronDown size={17}/>}
                        </div>
                    </button>


                    {showDropdown && (
                        <div className="dropdown-content">
                            <div style={{backgroundColor: selectedDate==="9.25 (월)" ? 'rgba(79, 117, 255, 0.70)' : 'rgba(255, 255, 255, 0.5)', color: selectedDate === "9.25 (월)" ? '#FFF' : 'black'}} onClick={() => handleOnSelectChange("9.25 (월)")}>9.25 (월)</div>
                            <div style={{backgroundColor: selectedDate==="9.26 (화)" ? 'rgba(79, 117, 255, 0.70)' : 'rgba(255, 255, 255, 0.5)', color: selectedDate === "9.26 (화)" ? '#FFF' : 'black'}} onClick={() => handleOnSelectChange("9.26 (화)")}>9.26 (화)</div>
                        </div>   
                    )}
            </div>
            {selectedDate === "9.25 (월)" && selectedType === "festival" &&<DetailTable1 />}
            {selectedDate === "9.26 (화)" && selectedType === "festival" &&<DetailTable2 />}
            {selectedDate === "9.25 (월)" && selectedType === "performance" &&<DetailPerformance1 />}
            {selectedDate === "9.26 (화)" && selectedType === "performance" &&<DetailPerformance1 />} 
        </div>
    );
    
};

export default TableType;
