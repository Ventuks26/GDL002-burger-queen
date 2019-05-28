import React, { Component } from "react";

import "./App.css";
import Home from "./Components/Home";
import Waiter from "./Components/Waiter";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="backgroundNav">
          <Route path="/" exact component={Home} />
          <Route path="/waiter/" component={Waiter} />
        </div>
      </Router>
    );
  }
}

export default App;
