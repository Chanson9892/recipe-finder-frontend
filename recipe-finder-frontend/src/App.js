import logo from './logo.svg';
import './App.css';
import {Route, Switch, withRouter} from 'react-router-dom'

import Form from './Form'

class App extends React.Component{
  state ={
    user: "",
    token:""
  }

  // render
  renderForm = (routerProps) => {
    console.log(routerProps)
    if(routerProps.location.pathname === "/login"){
      return <Form name="Login Form" handleSubmit={this.handleLogin} />
    } else if (routerProps.location.pathname === "/signup"){
      return <Form name="Signup Form" handleSubmit={this.handleSignup} />
    }
  }
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
