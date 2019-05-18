import React from 'react';
import offer from './images/offers.png';
import './App.css';

class App extends React.Component {
  render() {
     return (
        <div>
           <header>
            <nav className="">
                <ul>
                    <li><a className="active" href="#">Home</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a class="float-right" href="profile.html">Profile</a></li>
                    <li><a class="float-right" href="signin.html">Login</a></li>
                  </ul>
            </nav>
          </header>

          <main>
            <div className="container">
              <div className="container">
                <h1 className="myhead">Ride My Ride</h1>
              </div>
              <h2 className="head">Ride offers</h2>
              <img src={offer} alt="offers" />
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
                <p>Do you have an account? <a href="signin.html">Login</a> or <a href="signup.html">Sign Up</a></p>
            </div>
          </main>
          <footer>
            <p>&copy; Copyright 2019</p>
          </footer>
          <script src="main.js"></script>
        </div>
     );
  }
}

export default App;
