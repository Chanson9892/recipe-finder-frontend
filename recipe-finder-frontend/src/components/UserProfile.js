import React, {Component} from 'react';

class UserProfile extends Component {

    render (){
        return(
            <div className="UserProfile">
                <h1>Username: {this.props.user}</h1>
            </div>
        )
    }

}

export default UserProfile