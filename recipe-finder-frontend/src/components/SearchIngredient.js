import React from 'react';

const SearchIngredient = (props) => {
  return (
    <form onSubmit={props.handleSearchIngredient}>
      <label>
        <label htmlFor="search ingredient">Search Ingredient: </label>
        <input type="text" name="search ingredient" value={props.searchIngredientInput} onChange={props.handleChangeIngredient}/>
      </label>
      <input type="submit" value="Submit"/>
    </form>
  );
}

export default SearchIngredient;