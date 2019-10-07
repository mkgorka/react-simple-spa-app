import React, { Component } from "react";
import Suggestions from './Suggestions.js'
import axios from 'axios';
import {
  NavLink,
} from "react-router-dom";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      // isLoaded: false,
      symbol: []
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  getInfo = () => {
    axios.get(`http://localhost:8080/datasource/getSymbols?substring=${this.state.input}`)
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        console.log("UWAGA ERROR: " + error.response)
      })
  }
  handleInputChange(event) {


    this.setState({
      input: event.target.value
    }, () => {
      
      if (this.state.input && this.state.input.length > 2) {

        this.getInfo()
      } else {
      }
    })
    console.log(this.state.symbols)
  }
handleSubmit(){
  //TODO dodanie kolejnej rubryki i butona
}

  
  render() {
    return (

      <div>
        <h2>Dashboard</h2>
        <p>Choose the symbol to subsrcibe: </p>
        <input
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
          
        />
        <p>{this.state.input}</p>
        <p>Type at least 3 letters of the symbol</p>
        {/* <Suggestions symbols={this.state.symbols} /> */}
        <button onClick={this.handleSubmit}>Subscribe</button>
        <NavLink to="/">Logout</NavLink>

      </div>
    );
  }
}

export default Dashboard;