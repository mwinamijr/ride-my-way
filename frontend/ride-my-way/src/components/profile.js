import React, { Component } from "react";
import Navbar from "./Navbar"
import Footer from './footer'
import Avatar from '../assets/images/default.png'

class Profile extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>
            <div className="p-container">
                <div className="avatar">
                  <img src={Avatar} alt="profile" height="150" width="150" />
                </div>
                <h2>Mwinami JR</h2>
                <h4>PRO DRIVER</h4>
                <p>Am a good driver with a 4 years of driving experience</p>
            </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Profile;