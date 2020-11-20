import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Header from './components/Form'
import Login from './Login'
import Home from './Home'
import Navbar from './Navbar'

export default class App extends Component{

  render() {
    return(
    <Router>
      <div>
        <Header />
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </div>
    </Router>
    )
  }
}

