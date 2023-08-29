import React from 'react';
import { useState,useEffect } from 'react';
const InformationPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState(['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']);

  const handleSearch = (searchValue) => {
    setSearchTerm(searchValue);
    const filtered = filteredItems.filter(item =>
      item.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <div className="App">
      
      <SearchBar value={searchTerm} onChange={handleSearch} />
      <ItemList items={filteredItems} />
    </div>
  );
};

const ItemList = ({ items }) => {
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  };
const SearchBar = ({ value, onChange }) => {
    return (
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    );
  };

export default InformationPage;