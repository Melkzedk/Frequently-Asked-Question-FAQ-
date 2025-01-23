import React from "react";

const SearchBar = ({ onSearch }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search FAQs..."
        onChange={(e) => onSearch(e.target.value)}
        className="search-bar"
      />
    </div>
  );
};

export default SearchBar;
