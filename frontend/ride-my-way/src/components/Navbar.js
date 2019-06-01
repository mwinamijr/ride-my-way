import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import './index.css';

class Navbar extends Component {
  render() {
    return (
      <div>
        <header className="container">
          <div className='link'>
            <ul>
              <li>
                <NavLink className='a' exact to="/">Home</NavLink>
              </li>
              <li>
                <NavLink className='a' exact to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink className='a' exact to="/profile">Profile</NavLink>
              </li>
              <li>
                <NavLink className='a' exact to="/signin">Login</NavLink>
              </li>
            </ul>
          </div>
        </header>
      </div>
    );
  }
}

export default Navbar;