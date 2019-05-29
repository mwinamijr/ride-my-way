import React, { Component } from "react";
import Navbar from "./Navbar"
import Main from "./contents"
import Footer from './footer'

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default Dashboard;