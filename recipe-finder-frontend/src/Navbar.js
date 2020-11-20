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
        <NavLink
          to="/"
          exact
          style={link}
          activeStyle={{
            background: 'blue'
          }}
        >Home</NavLink>
        <NavLink
          to="/login"
          exact
          style={link}
          activeStyle={{
            background: 'kblue'
          }}
        >Login</NavLink>
      </div>
    )
  }
}
 
export default Navbar;