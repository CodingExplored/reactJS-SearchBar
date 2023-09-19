import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ suggestions }) => {
  // State to track the input value and whether to display suggestions
  const [inputValue, setInputValue] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Handle input change event
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    // Show suggestions when input value is not empty
    setShowSuggestions(value.length > 0);
  };

  // Handle suggestion click event
  const handleSuggestionClick = (suggestion) => {
    // Set the selected suggestion as the input value and hide suggestions
    setInputValue(suggestion);
    setShowSuggestions(false);
  };

  return (
    <div className="search-bar">
      {/* Input field for searching */}
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search..."
      />

      {/* Display suggestions when showSuggestions is true */}
      {showSuggestions && (
        <ul className="suggestions">
          {/* Map through filtered suggestions and create list items */}
          {suggestions
            .filter((suggestion) =>
              suggestion.toLowerCase().includes(inputValue.toLowerCase())
            )
            .map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
