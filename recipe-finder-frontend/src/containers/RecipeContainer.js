// big container that holds all the recipes
import React, { Component, Fragment } from 'react';
import SearchRecipe from '../components/SearchRecipe'
import RecipeList from './RecipeList'
import FavoriteContainer from './FavoriteContainer'

const API = "http://localhost:3000"

let token = localStorage.getItem('token')

export default class RecipeContainer extends Component {

    state = {
      recipes: [],
      searchRecipeInput: '',
      // userFavorites: this.props.userFavorites
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
    //   .then(newFavorite => {
    //     this.setState({
    //       userFavorites: [...this.state.userFavorites, newFavorite]
    //     })
    // })
    }


    render() {
        // console.log(`user favorites = `, this.props.userFavorites)
        return (
          <Fragment>
            <SearchRecipe handleSearch={this.handleSearch} searchRecipeInput={this.state.searchRecipeInput} handleChange={this.handleChange}/>
            <div className='container'>
              <FavoriteContainer userFavorites={this.props.userFavorites}/> 
              <RecipeList recipes={this.state.recipes} createRecipeOnFavoriteClick={this.createRecipeOnFavoriteClick} />
            </div>
          </Fragment>
        );
    }
}