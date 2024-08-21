import React from 'react';
import './FilterBar.css'; // Add your styles here

const FilterBar = ({ categories = [], selectedCategory, onCategoryChange }) => {
  return (
    <div className="filter-bar">
      {categories.map((category, index) => (
        <button
          key={index}
          className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
