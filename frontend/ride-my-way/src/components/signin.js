import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import Navbar from "./Navbar"
import Footer from './footer'
import Avatar from '../assets/images/default.png'

class Signin extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>
            <div className="container">
                <form action="action_page.php">
                    <div className="imgcontainer">
                    <img src={Avatar} alt="default" className="default"/>
                    </div>
                
                    <div className="container">
                    <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required/>
                
                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required/>
                
                    <button type="submit">Login</button>
                    <label>
                        <input type="checkbox" checked="checked" name="remember"/> Remember me
                    </label>
                    </div>
                
                    <div className='container'>
                    <button type="button" className="cancelbtn">Cancel</button>
                    <span class="psw">Forgot <a href="#">password?</a></span>
                    </div>
                </form>
            </div>
            <div className="container" id="account">
                <p>Don't have an account? <NavLink to="/signup">Sign Up</NavLink></p>
            </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Signin;