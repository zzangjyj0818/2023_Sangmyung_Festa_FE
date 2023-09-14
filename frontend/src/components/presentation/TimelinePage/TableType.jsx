import React from 'react';
import DetailPerformance from './DetailPerformance.jsx';
import { datas1, datas2 } from '../../container/TimelinePage/dataSet.jsx';
import '../../../styles/components/TimelinePage/TableType.scss';
import Up from '../../../assets/TimelinePage/icon_arrow_up.webp';
import Down from '../../../assets/TimelinePage/icon_arrow_down.webp';
import DetailTableContainer from '../../container/TimelinePage/DetailTableContainer.jsx';

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
                            {selectedDate} {showDropdown ? <img src={Down} alt='' style={{widht:'24px', height:'24px', marginTop: '-3px'}}/> : <img src={Up} alt=''  style={{widht:'24px', height:'24px', marginTop: '-3px'}}/>}
                        </div>
                    </button>


                    {showDropdown && (
                        <div className="dropdown-content">
                            <div style={{backgroundColor: selectedDate==="9.25 (월)" ? 'rgba(79, 117, 255, 0.70)' : 'rgba(255, 255, 255, 0.5)', color: selectedDate === "9.25 (월)" ? '#FFF' : 'black'}} onClick={() => handleOnSelectChange("9.25 (월)")}>9.25 (월)</div>
                            <div style={{backgroundColor: selectedDate==="9.26 (화)" ? 'rgba(79, 117, 255, 0.70)' : 'rgba(255, 255, 255, 0.5)', color: selectedDate === "9.26 (화)" ? '#FFF' : 'black'}} onClick={() => handleOnSelectChange("9.26 (화)")}>9.26 (화)</div>
                        </div>   
                    )}
            </div>
            {selectedType === "festival" && <DetailTableContainer selectedDate={selectedDate}/>}
            {selectedType === "performance" && <DetailPerformance datas={selectedDate === "9.25 (월)" ? datas1 : datas2}/>} 
        </div>
    );
    
};

export default TableType;
