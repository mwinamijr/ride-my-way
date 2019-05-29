import React, { Component } from "react";
import './index.css';

class Navbar extends Component {
  render() {
    return (
      <div>
        <header className="container">
          <div className="custom-header" >
            <ul>
            <li><a className="active" href="#">Home</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a class="float-right" href="profile.html">Profile</a></li>
            <li><a class="float-right" href="signin.html">Login</a></li>
            </ul>
          </div>
        </header>
      </div>
    );
  }
}

export default Navbar;