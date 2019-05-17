import React, { Component } from "react";
import Meal from "./meal.json";

class MenuMeal extends Component {
  constructor() {
    super();
    this.state = { Meal };
  }
  render() {
    const Meal = this.state.Meal.meal.map((btnMeal, i) => {
      return (
        <button className="mealBtn">
          {btnMeal.description}
          {btnMeal.price}
        </button>
      );
    });
    return <div>{Meal}</div>;
  }
}

export default MenuMeal;
