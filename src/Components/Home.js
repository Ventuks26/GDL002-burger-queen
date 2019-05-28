import React, { Component } from "react";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="backgroundHome">
        <div className="col-sm-6">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div className=" col-sm-offset-6">
          >
          <Link to="/waiter">
            <button type="button" className="start">
              Inicio
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
