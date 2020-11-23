import React from 'react';

const Search = (props) => {
  return (
    <div className="filter">
      <input
        id="search-ingredient-bar"
        type="text"
        placeholder="Search Recipes"
        onChange={props.handleSearch}
      />
    </div>
  );
}

export default Search;