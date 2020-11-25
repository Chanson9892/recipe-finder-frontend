import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
 
const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'pink',
  color: 'white',
}
 
class Navbar extends Component {
  render() {
    return (
      <div>
        <NavLink to="/" exact style={link} activeStyle={{ background: 'blue' }}  >Home</NavLink>
        {!this.props.token && <NavLink to="/login" exact style={link} activeStyle={{ background: 'blue' }}>Login</NavLink> }
        {!this.props.token && <NavLink to="/signup" exact style={link} activeStyle={{ background: 'blue' }}>Sign up</NavLink> }
        {this.props.token && <button style={link} onClick={this.props.handleLogout}>Logout</button> }
        {this.props.token && <NavLink to="/profile" exact style={link} activeStyle={{ background: 'blue' }}>View Profile</NavLink> }
      </div>
    )
  }
}
 
export default Navbar;