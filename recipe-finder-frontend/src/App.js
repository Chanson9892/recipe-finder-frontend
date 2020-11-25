import React, {Component} from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import Navbar from './Navbar'
import Form from './Form'
import UserProfile from './components/UserProfile'
import RecipeContainer from './containers/RecipeContainer'

const URL = 'http://localhost:3000'

class App extends Component {
  state ={
    user: "",
    token: null
  }

  renderForm = (routerProps) => {
    console.log(routerProps)
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
        // method: 'GET',
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
    console.log('login')
    this.handleAuthFetch(info, `${URL}/login`)

  }

  handleSignup = (info) => {
    console.log('sign up')
    this.handleAuthFetch(info, `${URL}/users`)
  }

  handleLogout = () => {
    localStorage.removeItem('token')
    this.setState({
      user: "",
      token: null
    })
    return <Redirect to="/" push={true} />
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
      console.log(data)
      localStorage.setItem("token", data.token)
      this.setState({user: data.user, token: data.token}, ()  =>{
        console.log(this.state)
        //redirects to home after login/signup
        this.props.history.push('/')
      }
        )
    })
  }

  render (){
    return(
      <div className="App">
        <Header />
        <Navbar handleLogout={this.handleLogout} token={this.state.token}/>
        <br></br>
        <RecipeContainer /> 
        <br></br>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={this.renderForm} />
        <Route exact path="/signup" component={this.renderForm} />
        <Route exact path='/profile' component={() => <UserProfile user={this.state.user.username} />} />
      </Switch>
    </div>
    )
  }
}
export default withRouter (App)

