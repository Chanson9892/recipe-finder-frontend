// big container that holds all the recipes
import React, { Component, Fragment } from 'react';
import SearchRecipe from '../components/SearchRecipe'
import RecipeList from './RecipeList'
// import FavoriteContainer from './FavoriteContainer'

const API = "http://localhost:3000"

let token = localStorage.getItem('token')

export default class RecipeContainer extends Component {
    state={
      recipes: [],
      searchRecipeInput: '',
      ingredients: [],
      searchIngredientInput: ''
    }

    // sets searchInput to whatever is typed in the search bar to
    handleSearch = (e) => {
      e.preventDefault()
      fetch(API + `/get_recipe?titleMatch=${this.state.searchRecipeInput}&includeIngredients=${this.state.ingredients}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          recipes: data.results,
          // searchRecipeInput: ''
        })
      })
    }

    handleChange = (e) => {
      this.setState({
        searchRecipeInput: e.target.value
      })
    }

    handleChangeIngredient = (e) => {
      this.setState({
        searchIngredientInput: e.target.value
      })
    }

    handleSubmitIngredient = () => {
      // need to double check
      let ingredientsString;
      if (this.state.ingredients.length === 0){
        ingredientsString = this.state.searchIngredientInput
      } else {
        ingredientsString = [this.state.ingredients, this.state.searchIngredientInput].join()
      }
      this.setState({
        ingredients: ingredientsString,
        searchIngredientInput: ''
      })
    }

    clearIngredients = () => {
      this.setState({
        ingredients: []
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
          url: selectRecipe[0].sourceUrl
        })
      })
      .then(res => res.json())
      .then((recipe) => this.handleFavoriteClick(recipe))
    }

    handleFavoriteClick = (favorite) => {
      fetch(API + `/favorites`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          recipe_id: favorite.id
        })
      })
      .then(res => res.json())
      .then(newFavorite => this.props.updateFavorites(newFavorite))
    }


    render() {
        // console.log(this.state.recipes)
        // console.log(`ingredients = ${this.state.ingredients}`)
        return (
          <Fragment>
            <SearchRecipe handleSearch={this.handleSearch} searchRecipeInput={this.state.searchRecipeInput} handleChange={this.handleChange}
            handleChangeIngredient={this.handleChangeIngredient} handleSubmitIngredient={this.handleSubmitIngredient}
            searchIngredientInput={this.state.searchIngredientInput}/>
            <h3 className='used-ingredients'>Ingredients used: {this.state.ingredients}</h3> 
            <button onClick={() => this.clearIngredients()}>Clear Ingredients</button>
            <div className='container'>
              <RecipeList recipes={this.state.recipes} createRecipeOnFavoriteClick={this.createRecipeOnFavoriteClick} />
            </div>
          </Fragment>
        );
    }
}