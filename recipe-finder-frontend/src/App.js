import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Header from './components/Header'
import Home from './Home'
import Navbar from './Navbar'

const App = () =>{
  return(
    <Router>
      <div>
        <Header />
        <Navbar />
        <br></br>
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  )
}
export default App

