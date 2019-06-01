import React, { Component } from "react";
import Navbar from "./Navbar"
import Footer from './footer'

class Contact extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>
	        <div className="container">
                <div className="head">
                    <h2 className="head">Contact Us</h2>
                </div>
                
                <form action="action_page.php">
        
                    <label for="fname">First Name</label><br/>
                    <input type="text" id="fname" name="firstname" placeholder="Your name ...." /><br/>
        
                    <label for="lname">Last Name</label><br/>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name ...."/><br/>
        
                    <label for="email">Last Name</label><br/>
                    <input type="text" id="email" name="email" placeholder="Your email ...."/><br/>
        
                    <label for="subject">Subject</label><br/>
                    <textarea id="subject" name="subject" placeholder="Write something.."></textarea><br/>
                    
                    <div class="button">
                        <button type="submit">Send</button>
                    </div>
                </form>
            </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Contact;