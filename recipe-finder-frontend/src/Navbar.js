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
          to="/form"
          exact
          style={link}
          activeStyle={{
            background: 'blue'
          }}
        >Login</NavLink>
        <NavLink
          to="/form"
          exact
          style={link}
          activeStyle={{
            background: 'blue'
          }}
        >Sign up</NavLink>
      </div>
    )
  }
}
 
export default Navbar;