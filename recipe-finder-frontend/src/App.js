import React, {Component} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import Navbar from './Navbar'
import Form from './Form'
import Profile from './components/Profile'
// import RecipeContainer from './containers/RecipeContainer'

const URL = 'http://localhost:3000'

class App extends Component {
  state ={
    user: "",
    token: null
  }

  renderForm = (routerProps) => {
    if(routerProps.location.pathname === "/login"){
      return <Form name="Login Form" handleSubmit={this.handleLogin} />
    } else if (routerProps.location.pathname === "/signup"){
      return <Form name="Signup Form" handleSubmit={this.handleSignup} />
    }
  }

  componentDidMount() {
    let token = localStorage.getItem('token')
    if (token) {
      fetch(`${URL}/profile`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          // 'Accept': 'application/json'
        }
      })
      .then(res => res.json())
      .then(user => {
        this.setState({
          user,
          token
        })
      })
    }
  }

  // auth
  handleLogin = (info) => {
    this.handleAuthFetch(info, `${URL}/login`)
  }

  handleSignup = (info) => {
    this.handleAuthFetch(info, `${URL}/users`)
  }

  handleLogout = () => {
    localStorage.removeItem('token')
    this.setState({
      user: "",
      token: null
    })
    this.props.history.push('/')
  }

  handleAuthFetch = (info, request) => {  
    fetch(request,{
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          username: info.username,
          password: info.password
      })
    })
    .then(res => res.json())
    .then(data => {
      localStorage.setItem("token", data.token)
      this.setState({user: data.user, token: data.token}, ()  =>{
        //redirects to home after login/signup
        this.props.history.push('/')
      })
    })
  }

  updateFavorites = (favorite) => {
    this.setState({
      user: {...this.state.user, favorites: [...this.state.user.favorites, favorite]}
    })
  }

  render (){
    // console.log(`user = ${this.state.user}`)
    // console.log(`user favorites = `, this.state.user.favorites)
    return(
      <div className="App">
        <Header />
        <Navbar handleLogout={this.handleLogout} token={this.state.token}/>
        <br></br>
      <Switch>
        <Route exact path="/" component={() => <Home token={this.state.token} updateFavorites={this.updateFavorites}/>} />
        <Route exact path="/login" component={this.renderForm} />
        <Route exact path="/signup" component={this.renderForm} />
        <Route exact path='/profile' component={() => <Profile user={this.state.user} userFavorites={this.state.user.favorites}/>} />
      </Switch>
    </div>
    )
  }
}
export default withRouter (App)

