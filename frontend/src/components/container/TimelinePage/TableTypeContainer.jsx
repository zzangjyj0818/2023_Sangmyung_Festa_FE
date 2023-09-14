import React, {useState} from 'react';
import TableType from '../../presentation/TimelinePage/TableType';

const TableTypeContainer = () => {
    const [selectedType, setSelectedType] = useState('festival'); 
    const [selectedDate, setSelectedDate] = useState('9.25 (월)'); 
    const [showDropdown, setShowDropdown] = useState(false); // Dropdown

    const handleOnClick = (type) => {
        setSelectedType(type);
        window.scrollTo(0, 0);
    }

    const handleOnSelectChange = (date) => {
        setSelectedDate(date);
        setShowDropdown(false); // When We select the date, Off the DropDown Menu.
        window.scrollTo(0, 0);
    }
    return (
        <TableType
            selectedType={selectedType}
            selectedDate={selectedDate}
            showDropdown={showDropdown}
            setShowDropdown={setShowDropdown}
            handleOnClick={handleOnClick}
            handleOnSelectChange={handleOnSelectChange}
        />
    );
};

export default TableTypeContainer;