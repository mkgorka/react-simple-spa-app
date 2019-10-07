import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import NewAccount from "./NewAccount";
import About from "./About";
import './css/stylesheet.css';
import Dashboard from "./Dashboard";


class App extends Component {
  render() {
    return (
      <HashRouter>
          <div className="container">
            <h1>My simple SPA application</h1>
            
            <ul className="header">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/NewAccount">Sign up</NavLink></li>
              <li><NavLink to="/About">About</NavLink></li>
            </ul>
            <div className="content">
              <Route exact path="/" component={Home} />
              <Route path="/NewAccount" component={NewAccount} />
              <Route path="/About" component={About} />
              <Route path="/Dashboard" component={Dashboard}/>

            </div>
          </div>
      </HashRouter>

    );
  }
}


export default App;
