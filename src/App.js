import React, { Component } from "react";

import "./App.css";
import Home from "./Home";
import Waiter from "./Waiter";
import {BrowserRouter, Route} from "react-router-dom";

class App extends Component {
  render() {
    return (
      
      <BrowserRouter>
      <Route exact path="/" Component= {Home} />
      <Route path="/waiter" Component={Waiter} />
      <Home />
        <Waiter />
      </BrowserRouter>
      
       
      
    );
  }
}

export default App;
