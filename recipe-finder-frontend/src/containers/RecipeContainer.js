// big container that holds all the recipes
import React, { Component, Fragment } from 'react';
import SearchRecipe from '../components/SearchRecipe'
import RecipeList from './RecipeList'

const API = "http://localhost:3000"

export default class RecipeContainer extends Component {
    state = {
        recipes: [],
        searchRecipeInput: '',
        recipeTitle: "",
        recipeImage: "",
        recipeURL: ""
    }

    // sets searchInput to whatever is typed in the search bar to
    handleSearch = (e) => {
      e.preventDefault()
      let token = localStorage.getItem('token')
      fetch(API + `/get_recipe?query=${this.state.searchRecipeInput}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          // 'Accept': 'application/json'
        }
      })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          recipes: data.results
          // recipeTitle: data.title,
          // recipeImage: data.image,
          // recipeURL: data.sourceURL
        })
      })
    }

    handleChange = (e) => {
      this.setState({
        searchRecipeInput: e.target.value
      })
    }

    render() {
        //console.log(`handleClicked = ${this.state.editClicked}`)
        return (
          <Fragment>
            <SearchRecipe handleSearch={this.handleSearch} searchRecipeInput={this.state.searchRecipeInput} handleChange={this.handleChange}/>
            <div className='container'>
            <RecipeList recipes={this.state.recipes} />
            </div>
          </Fragment>
        );
      }
}