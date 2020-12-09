import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
 
const link = {
  width: '150px',
  padding: '12px',
  margin: '5px',
  background: 'pink',
  color: 'white',
}
 
class Navbar extends Component {
  render() {
    return (
      <div className='nav-bar'>
        <NavLink to="/" exact style={link} activeStyle={{ background: 'black' }}>Home</NavLink>
        {!this.props.token && <NavLink to="/login" exact style={link} activeStyle={{ background: 'black' }}>Login</NavLink> }
        {!this.props.token && <NavLink to="/signup" exact style={link} activeStyle={{ background: 'black' }}>Sign up</NavLink> }
        {this.props.token && <NavLink to="/profile" exact style={link} activeStyle={{ background: 'black' }}>Profile</NavLink> }
        {this.props.token && <button style={link} onClick={this.props.handleLogout}>Logout</button> }
      </div>
    )
  }
}
 
export default Navbar;