import React, { Component } from 'react';
import RecipeContainer from '../containers/RecipeContainer'
 
class Home extends Component {

  renderContent = () => {
    if (this.props.token) {
        return <RecipeContainer userFavorites={this.props.userFavorites}/>
    } else {
        return <div>Welcome to Recipe Finder! Login or Signup to find recipes!</div>
    }
  }

  render() {
    return (
      <div className='master-detail-element detail'>
          {this.renderContent()}
          {/* home */}
      </div>
    )
  }
}
 
export default Home;