import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/AboutUs';
import Products from './Pages/Products';
import Booking from './Pages/Booking';
import './App.css';

class App extends Component {
  render(){
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Home }></Route>
            <Route exact path="/about" component={ About }></Route>
            <Route exact path="/products" component={ Products }></Route>
            <Route exact path="/booking" component={ Booking }></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
