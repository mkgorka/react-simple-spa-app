import React, { Component } from "react";
import {
  NavLink,
  Route,
  Redirect,
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Dashboard from "./Dashboard";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      toDashboard: false,
      isLoggedin: false,

    }
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleUsernameChange(event) {
    this.setState({ username: event.target.value })
  }
  handlePasswordChange(event) {
    this.setState({ password: event.target.value })
  }

  handleLogin() {
    let username = this.state.username;
    let password = this.state.password;
    //let url=;
    console.log("username: " + username);
    console.log("pwsd: " + password);

    if (username.value === "" || password === "") {
      alert("Please insert your login credentials");
      return false;
    } else{
      //TODO: sending request  to a server
      alert("Logged in");
      this.setState({
        toDashboard: true,
        isLoggedin: true,
      })
      console.log("Loggedin")
    }

  }

  render() {
    if (this.state.toDashboard === true) {
      return <Redirect to='/Dashboard' />
    }
    return (
      <div className="login-panel">
        <FontAwesomeIcon id="icon" icon={faUser} /><h2>Login to your account</h2>
        <form action="url" method="POST">
          <label for="username"></label>
          <input id="usernameField" type="text" placeholder="Username" value={this.state.username} onChange={this.handleUsernameChange} />
          <label for="password"></label>
          <input id="pswdField" type="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange} />
          <br />
          <button id="login" type="button" onClick={this.handleLogin}>Log in</button>
          <h4>Don't have an account?</h4>
          <button id="new-account">
            <NavLink to="/NewAccount" style={{ textDecoration: 'none', color: 'black' }}>Create new account</NavLink>
          </button>
        </form>
      </div>
    );
  }
}
export default Home;