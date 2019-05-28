import React, { Component } from "react";

import "./App.css";
import Home from "./Components/Home";
import Waiter from "./Components/Waiter";
import { BrowserRouter as HashRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="backgroundNav">
          <Route path="/home" exact component={Home} />
          <Route path="/waiter/" component={Waiter} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
