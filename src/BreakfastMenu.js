import React, { Component } from "react";
import Breakfast from "./breakfast.json";

class MenuBreakfast extends Component {
  constructor() {
    super();
    this.state = { Breakfast };
  }

  Orden = () =>{
    

  }
  render() {
    const Breakfast = this.state.Breakfast.breakfast.map((btnBreakfast, i) => {
      return (
        <button className="breakfastBtn" name={i}>
          {btnBreakfast.description}
          {btnBreakfast.price}
        </button>
      );
    });
    return <div>{Breakfast}</div>;
  }
}

export default MenuBreakfast;
