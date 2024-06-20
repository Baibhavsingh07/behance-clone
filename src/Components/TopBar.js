import React, { useState } from "react";
import "./TopBar.css";

const TopBar = ({
  searchTerm,
  setSearchTerm,
  suggestions,
  handleInputChange,
  handleSuggestionClick,
  setSelectedFilter,
}) => {
  return (
    <div className="top-bar">
      <button className="filter-btn">Filter</button>
      <div className="autocomplete">
        <input
          type="text"
          id="search"
          placeholder="Search the creative world at work"
          value={searchTerm}
          onChange={handleInputChange}
          className="search-input"
        />
        {suggestions.length > 0 && (
          <ul className="suggestions">
            {suggestions.map((item, index) => (
              <li key={index} onClick={() => handleSuggestionClick(item.title)}>
                {item.title}
              </li>
            ))}
          </ul>
        )}
      </div>
      <button className="search-image-btn">Search by Image</button>
      <select
        id="sort"
        className="sort-dropdown"
        onChange={(e) => setSelectedFilter(e.target.value)}
      >
        <option value="">None</option>
        <option value="recommended">Recommended</option>
        <option value="liked">Most Liked</option>
        <option value="viewed">Most Viewed</option>
        <option value="recent">Most Recent</option>
      </select>
    </div>
  );
};

export default TopBar;
