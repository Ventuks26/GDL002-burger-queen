import React, { Component } from "react";

import "./App.css";
import Home from "./Components/Home";
import Waiter from "./Components/Waiter";
import { HashRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/waiter" component={Waiter} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
