import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import Navbar from "./Navbar"
import Footer from './footer'

class Signup extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>
            <form action="action_page.php">
                <div className="container">
                    <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr/>
                
                    <label for="email"><b>Email</b></label><br/>
                    <input type="text" placeholder="Enter Email" name="email" required/>
                    <br/>
                
                    <label for="psw"><b>Password</b></label><br/>
                    <input type="password" placeholder="Enter Password" name="psw" required/>
                    <br/>
                    <label for="psw-repeat"><b>Repeat Password</b></label><br/>
                    <input type="password" placeholder="Repeat Password" name="psw-repeat" required/>
                    <br/>
                    <label>
                        <input type="checkbox" checked="checked" name="remember" /> Remember me
                    </label>
                    <br/>
                    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
                
                    <div className="clearfix">
                        <button type="button" className="cancelbtn">Cancel</button>
                        <button type="submit" className="signupbtn">Sign Up</button>
                    </div>
                </div>
            </form>
              <div className="container" id="account">
                    <p>Already have an account? <NavLink to="/signin">Login</NavLink></p>
                </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Signup;