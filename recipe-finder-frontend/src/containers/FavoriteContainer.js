import React, { Component, Fragment } from 'react';
import FavoriteList from './FavoriteList';

const API = "http://localhost:3000"

let token = localStorage.getItem('token')

export default class FavoriteContainer extends Component {
  state = {
    userFavorites: this.props.userFavorites
  }

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
    .then(() => {
      const filteredFavorites = [...this.state.userFavorites].filter(
        userFavorite => userFavorite.id !== favorite.id
      )
      this.setState({
        userFavorites: filteredFavorites
      })
    })
  }

  render() {
    // console.log(`props favorites = `, this.props.userFavorites)
    //console.log(`state favorites = `, this.state.userFavorites)
    return (
      <Fragment>
        <div className='container'>
          <FavoriteList userFavorites={this.state.userFavorites} handleUnfavoriteClick={this.handleUnfavoriteClick}/>
        </div>
      </Fragment>
    );
  }

}