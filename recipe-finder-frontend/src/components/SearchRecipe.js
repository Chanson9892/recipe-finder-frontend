import React from 'react';

const Search = (props) => {
  return (
    <form onSubmit={props.handleSearch}>
      <label>
        Search Recipe:
        <input type="text" value={this.props.value} onChange={this.handleSearch} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Search;