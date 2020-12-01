// big container that holds all the recipes
import React, { Component, Fragment } from 'react';
import SearchRecipe from '../components/SearchRecipe'
import RecipeList from './RecipeList'
// import FavoriteContainer from './FavoriteContainer'

const API = "http://localhost:3000"

let token = localStorage.getItem('token')

export default class RecipeContainer extends Component {
    state = {
        recipes: [],
        searchRecipeInput: '',
        // favoritedRecipes: [],
        // favoriteClicked: false,
        // selectedRecipe: {}
    }

    // sets searchInput to whatever is typed in the search bar to
    handleSearch = (e) => {
      e.preventDefault()
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
        })
      })
    }

    handleChange = (e) => {
      this.setState({
        searchRecipeInput: e.target.value
      })
    }

    createRecipeOnFavoriteClick = (recipe) => {
      let selectRecipe = this.state.recipes.filter((rec) => rec.id === recipe.id)
      fetch(API + '/recipes', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          api_id: selectRecipe[0].id,
          title: selectRecipe[0].title,
          image: selectRecipe[0].image,
          url: selectRecipe[0].url
        })
      })
      .then(res => res.json())
      .then((recipe) => this.handleFavoriteClick(recipe))
    }

    handleFavoriteClick = (recipe) => {
      fetch(API + `/favorites`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          recipe_id: recipe.id
        })
      })
    }


    render() {
        // console.log(`favoritedRecipes = ${this.state.favoritedRecipes}`)
        return (
          <Fragment>
            <SearchRecipe handleSearch={this.handleSearch} searchRecipeInput={this.state.searchRecipeInput} handleChange={this.handleChange}/>
            <div className='container'>
              {/* <FavoriteContainer /> */}
              <RecipeList recipes={this.state.recipes} handleFavoriteClick={this.createRecipeOnFavoriteClick} />
            </div>
          </Fragment>
        );
    }
}