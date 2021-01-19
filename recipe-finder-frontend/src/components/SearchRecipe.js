import React from 'react';

const SearchRecipe = (props) => {
  return (
    <form onSubmit={props.handleSearch}>
      <label>
        <label htmlFor="search recipe">Search Recipe: </label>
        <input type="text" name="search recipe" value={props.searchRecipeInput} onChange={props.handleChange}/>
      </label>
      <input type="submit" value="Submit"/>
      <label>
        <label htmlFor="search ingredient">Include Ingredient: </label>
        <input type="text" name="search ingredient" value={props.searchIngredientInput} onChange={props.handleChangeIngredient}/>
      </label>
      <button onClick={() => props.handleSubmitIngredient()}>Include Ingredient</button>

    </form>
  );
}

export default SearchRecipe;