import React from 'react';

const SearchRecipe = (props) => {
  return (
    <form onSubmit={props.handleSearch}>
      <label>
        <label htmlFor="search recipe">Search Recipe: </label>
        <input type="text" name="search recipe" value={this.props.value}/>
      </label>
      <input type="submit" value="Submit" onSubmit={this.handleSearch}/>
    </form>
  );
}

export default SearchRecipe;