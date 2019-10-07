import React, { Component } from "react";
import {faUserPlus} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class NewAccount extends Component {
  render() {
    return (
      <div>
        <FontAwesomeIcon id="icon" icon={faUserPlus}/>
        <h2>Create new account</h2>
        <div className="newAccount">
          <form action="url" method="POST">
            <label for="username"> </label>
            <input id="usernameField" type="text" placeholder="Create username..." />
            <label for="password"></label>
            <input id="pswdField" type="password" placeholder="Create password..." />
            <p className="smallText">Your password should contain min. 8 characters including 1 number </p>
            <button id="sign-up" /*onClick={}*/>Sign up</button>
          </form>
        </div>
      </div>
    );
  }
}

export default NewAccount;