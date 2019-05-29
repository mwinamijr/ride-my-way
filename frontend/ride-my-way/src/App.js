import React, {Component} from 'react';
import { BrowserRouter,Route, Switch } from 'react-router-dom'
import Login from "./components/signin";
import Signup from "./components/signup";
import Contact from "./components/contact";
import Profile from "./components/profile";
import Home from "./components/home";

class App extends Component {
  render() {
     return (
        <BrowserRouter>
         <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/signin' component={Login} />
            <Route path='/signup' component={Signup} />
         </Switch>
        </BrowserRouter>
      
     );
  }
}

export default App;
