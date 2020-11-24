import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import Home from './Home'
import Navbar from './Navbar'
import Form from './Form'

const URL = 'http://localhost:3000'

class App extends Component {
  state ={
    user: "",
    token:""
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
        headers: {
          'Authentication': `Bearer ${token}`,
        }
      })
      .then(res => res.json())
      .then(user => {
        this.setState({user: user})
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
        this.props.history.push('/')
      }
        )
    })
  }

  render (){
    return(
      <div className="App">
        <Header />
        <Navbar />
        <br></br>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/form" component={Form} />
        </Switch>
    </div>
    )
  }
}
export default App

