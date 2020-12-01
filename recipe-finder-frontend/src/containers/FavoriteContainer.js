import React, { Component, Fragment } from 'react';
// import FavoriteList from './FavoriteList'

const API = "http://localhost:3000"

let token = localStorage.getItem('token')

export default class FavoriteContainer extends Component {
    
    state = {
        favoriteRecipes: [],
        selectedFaveRecipe: {}
    }

    // fetch favorites from backend
    // componentDidMount(){
    //     fetch(API + '/favorites', {

    //     headers: {
    //         'Authorization': `Bearer ${token}`,
    //         'Content-Type': 'application/json',
    //         Accept: 'application/json'
    //     }})
    //     .then((res) => res.json())
    //     .then((data) => this.setState({favoriteRecipes: data}))
    // }

    // handleUnfavoriteClick = () => {
    //     fetch(API + `/favorites/${this.state.selectedFaveRecipe.id}`, {
    //       method: "DELETE"
    //     })
    //       .then(res => res.json())
    //       .then(() => {
    //         const recipes = [...this.state.favoriteRecipes].filter(
    //           recipe => recipe.id !== this.state.selectedFaveRecipe.id
    //         )
    //         this.setState({
    //           favoriteRecipes: recipes,
    //           selectedFaveRecipe: {}
    //         })
    //     })
    // }

    render() {
        return (
          <Fragment>
            <div className='container'>
            {/* <FavoriteList recipes={this.state.favoriteRecipes} selectedFaveRecipe={this.state.selectedFaveRecipe} 
            handleUnfavoriteClick={this.handleUnfavoriteClick}/> */}
            </div>
          </Fragment>
        );
    }

}