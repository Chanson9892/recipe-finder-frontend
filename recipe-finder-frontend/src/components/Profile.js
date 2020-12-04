import React, {Component} from 'react';
import FavoriteContainer from '../containers/FavoriteContainer'

class Profile extends Component {

    renderContent = () => {
        if (this.props.user) {
            return (
                <div className="Profile">
                    <h1>Username: {this.props.user.username}</h1>
                    <FavoriteContainer userFavorites={this.props.userFavorites}/> 
                </div>
            )
        }
      }

    render (){
        return(
            <div>
                {this.renderContent()}
            </div>
        )
    }

}

export default Profile