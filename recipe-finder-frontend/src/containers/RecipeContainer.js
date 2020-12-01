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

    handleFavoriteClick = (recipeId) => {
      console.log(`recipeId = ${recipeId}`)
      let selectRecipe = this.state.recipes.filter((recipe) => recipe.id === recipeId)
      console.log(selectRecipe[0])
      fetch(API + `/favorites`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          user_id: this.props.user.id,
          api_id: selectRecipe[0].id,
          title: selectRecipe[0].title,
          image: selectRecipe[0].image,
          url: selectRecipe[0].url
        })
      })
    }

    // handleFavoriteClick = (recipeId) => {
    //   let selectRecipe = this.state.recipes.filter((recipe) => recipe.id === recipeId)
    //   this.setState({
    //     favoritedRecipes: [...this.state.favoritedRecipes, selectRecipe.title]
    //   })
    // }

    render() {
        // console.log(`favoritedRecipes = ${this.state.favoritedRecipes}`)
        return (
          <Fragment>
            <SearchRecipe handleSearch={this.handleSearch} searchRecipeInput={this.state.searchRecipeInput} handleChange={this.handleChange}/>
            <div className='container'>
              {/* <FavoriteContainer /> */}
              <RecipeList recipes={this.state.recipes} handleFavoriteClick={this.handleFavoriteClick} />
            </div>
          </Fragment>
        );
    }
}