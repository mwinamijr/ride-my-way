import React, { Component } from "react";
import offers from '../assets/offers.png';
import { NavLink } from 'react-router-dom';

import './index.css';

class Main extends Component {
  render() {
    return (
      <div>
        <div className="container">
            <div className="container">
                <h1 style={{fontSize:'48px', textAlign:'center'}}>Ride My Way</h1>
            </div>
            <h2 className="head">Ride offers</h2>
            <img src={offers} alt="offers"/>
        </div>
        
        <div className="container">
            <div className="custom-select">
                <h2>Offers selection</h2>
                <select>
                    <option value="0">Select offer:</option>
                    <option value="1">One Way</option>
                    <option value="2">Return Trip</option>
                    <option value="3">Family Package</option>
                    <option value="4">Custom Cars</option>
                </select>
            </div>
        </div>
        <div className="container" id="account">
            <p>Do you have an account? <NavLink to="/signin">Login</NavLink> or <NavLink to="/signup">Sign Up</NavLink></p>
        </div>
      </div>
    );
  }
}

export default Main;