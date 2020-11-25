import React from 'react';

const SearchRecipe = (props) => {
  return (
    <form onSubmit={props.handleSearch}>
      <label>
        <label htmlFor="search recipe">Search Recipe: </label>
        <input type="text" name="search recipe" value={props.searchRecipeInput} onChange={props.handleChange}/>
      </label>
      <input type="submit" value="Submit"/>
    </form>
  );
}

export default SearchRecipe;