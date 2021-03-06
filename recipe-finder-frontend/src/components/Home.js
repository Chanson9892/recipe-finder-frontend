import React, { Component } from 'react';
import RecipeContainer from '../containers/RecipeContainer'
 
class Home extends Component {

  renderContent = () => {
    if (this.props.token) {
      return (
        <div>
          <h1 className="title">Search for Recipes and filter by including certain Ingredients</h1>
          <RecipeContainer updateFavorites={this.props.updateFavorites}/>
        </div>
      )
    } else {
      return <h1 className="title">Welcome to Recipe Finder! Login or Signup to find recipes!</h1>
    }
  }

  render() {
    return (
      <div className='master-detail-element detail'>
          {this.renderContent()}
      </div>
    )
  }
}
 
export default Home;