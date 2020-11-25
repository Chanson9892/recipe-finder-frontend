// big container that holds all the recipes
import React, { Component, Fragment } from 'react';
import SearchRecipe from '../components/SearchRecipe'
//import RecipeList from './RecipeList'

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
      fetch(API + `/get_recipe?titleMatch=${e.target.value}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          searchRecipeInput: e.target.value,
          // recipes: data,
          // recipeTitle: data.title,
          // recipeImage: data.image,
          // recipeURL: data.sourceURL
        })
      })
    }

    //filters recipes based on what is typed in the search bar and what is based on sort by
    filterRecipes = () => {
        let filteredRecipes = [...this.state.recipes]
        if(this.state.searchInput !== ''){
            filteredRecipes =  filteredRecipes.filter( recipe => recipe.title.toLowerCase().includes(this.state.searchRecipeInput.toLowerCase()) ) 
            return filteredRecipes     
        }
    }

    render() {
        //console.log(`handleClicked = ${this.state.editClicked}`)
        return (
          <Fragment>
            <SearchRecipe handleSearch={this.handleSearch}/>
            <div className='container'>
              <RecipeList recipes={this.filterRecipes()} />
            </div>
          </Fragment>
        );
      }
}