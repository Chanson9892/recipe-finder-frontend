import React, {Component} from 'react';
import FavoriteContainer from '../containers/FavoriteContainer'

class Profile extends Component {

    renderContent = () => {
        if (this.props.user) {
            return (
                <>
                    <h1 className='title'>Username: {this.props.user.username}</h1>
                    <FavoriteContainer userFavorites={this.props.userFavorites} removeFavorites={this.props.removeFavorites}/> 
                </>
            )
        }
      }

    render (){
        return(
            <div className="Profile">
                {this.renderContent()}
            </div>
        )
    }

}

export default Profile