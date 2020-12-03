import React, { Component, Fragment } from 'react';
import FavoriteList from './FavoriteList';

const API = "http://localhost:3000"

let token = localStorage.getItem('token')

export default class FavoriteContainer extends Component {
    // this works if not using user serializer
    // state = {
    //     favoriteRecipes: []
    // }

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

  handleUnfavoriteClick = (favorite) => {
    fetch(API + `/favorites/${favorite.id}`, {
      method: "DELETE",
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(res => res.json())
  }

  render() {
    // console.log(`user favorites = `, this.props.userFavorites)
    return (
      <Fragment>
        <div className='container'>
          <FavoriteList userFavorites={this.props.userFavorites} handleUnfavoriteClick={this.handleUnfavoriteClick}/>
        </div>
      </Fragment>
    );
  }

}