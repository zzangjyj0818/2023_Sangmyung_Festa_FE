import React from 'react';
const TagList = ({ tags, onTagClick }) => {
  return (
    <div>
      {tags.map((tag) => (
        <button key={tag.id} onClick={() => onTagClick(tag.id)}>
          {tag.name}
        </button>
      ))}
    </div>
  );
};

const InfoDisplay = ({ info }) => {
    return (
      <div>
        <p>{info}</p>
      </div>
    );
  };
import React, { useState } from 'react';
import './App.css';
import TagList from './components/TagList';
import InfoDisplay from './components/InfoDisplay';
import { tagData, infoData } from './data'; // 데이터를 임포트하세요

function App() {
  const [selectedTagId, setSelectedTagId] = useState(null);

  const handleTagClick = (tagId) => {
    setSelectedTagId(tagId);
  };

  const selectedInfo = selectedTagId
    ? infoData.find((info) => info.tagId === selectedTagId).content
    : '';

  return (
    <div className="App">
      <h1>Tag App</h1>
      <TagList tags={tagData} onTagClick={handleTagClick} />
      <InfoDisplagiy info={selectedInfo} />
    </div>
  );
}

export default App;


