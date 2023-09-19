import React, { useState } from 'react'; // Import React and useState from 'react' library.
import './styles/SearchBar.css'; // Import the CSS file for styling.

const SearchBar = ({ suggestions, onChange }) => { // Define a functional component SearchBar that accepts props suggestions and onChange.
    const [value, setValue ] = useState('')

  const handleSuggestionClick = (suggestion) => { // Define a function handleSuggestionClick that takes a suggestion as an argument.
    onChange(suggestion); // Call the onChange function passed as a prop with the selected suggestion.
  };

  const handleChange = (value) => {
    onChange(value);
    setValue(value);
  }

  return (
    <div className="searchBar-container"> {/* Create a container div with a CSS class name 'searchBar-container'. */}
      <input
        type="text"
        className="searchBar-input" /* Create an input element with a CSS class name 'searchBar-input'. */
        value={handleChange} /* Bind the input's value to the onChange prop (usually used for input value in a controlled component). */
        placeholder="Search..." /* Provide a placeholder text for the input field. */
      />

      <ul className="searchBar-suggestions"> {/* Create an unordered list with a CSS class name 'searchBar-suggestions'. */}
        {suggestions // Use the 'suggestions' prop to filter and map suggestions.
          .filter((suggestion) =>
            suggestion.toLowerCase().includes(onChange.toLowerCase()) // Filter suggestions that match the current input value (case-insensitive).
          )
          .map((suggestion, index) => ( // Map each filtered suggestion to a list item.
            <li
              key={index} // Set a unique 'key' prop for each list item.
              className="searchBar-suggestion" // Apply the CSS class name 'searchBar-suggestion' to each list item.
              onClick={() => handleSuggestionClick(suggestion)} // Attach an 'onClick' event handler to call handleSuggestionClick when a suggestion is clicked.
            >
              {suggestion} {/* Display the suggestion text within the list item. */}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SearchBar; // Export the SearchBar component.
