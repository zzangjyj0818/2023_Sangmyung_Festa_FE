import React from "react"

const TagList = ({ tags, onTagClick, selectedTagId }) => {
    return (
      <div className="filter-tags">
        {tags.map((tag) => (
          <button
            key={tag.id}
            className={`tag-button ${selectedTagId === tag.id ? "active" : ""}`}
            onClick={() => onTagClick(tag.id)}
          >
            {tag.name}
          </button>
        ))}
      </div>
    )
}

export default TagList;