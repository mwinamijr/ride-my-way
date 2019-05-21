import React from 'react';
import './index.css';

const toolbar = props => {
  <header>
    <nav>
      <ul>
        <li><a className="active" href="#">Home</a></li>
        <li><a href="contact.html">Contact</a></li>
        <li><a class="float-right" href="profile.html">Profile</a></li>
        <li><a class="float-right" href="signin.html">Login</a></li>
      </ul>
    </nav>
  </header>
};


function navbar() {
  return (
    <header>
    <nav>
      <ul>
        <li><a className="active" href="#">Home</a></li>
        <li><a href="contact.html">Contact</a></li>
        <li><a class="float-right" href="profile.html">Profile</a></li>
        <li><a class="float-right" href="signin.html">Login</a></li>
      </ul>
    </nav>
  </header>
  );
}

export default navbar;
