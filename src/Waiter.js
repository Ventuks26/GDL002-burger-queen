import React, { Component } from "react";
import MenuBreakfast from "./BreakfastMenu";
import MenuMeal from "./MealMenu";
import OrderCard from "./OrderCard";

class Waiter extends Component {
  render() {
    return (
      <div className="backgroundBreakfast row-sm-12">
        <div className="col-sm-6">
          <div className="backgroundBreakfast">
            <p className="titleBreakfast">Desayuno</p>
            <MenuBreakfast />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="backgroundMeal">
            <p className="titleMeal">Comida</p>
            <MenuMeal />
          </div>
        </div> <br></br>
        <div className="backgroundOrder col-sm-6">
          <OrderCard />
        </div>
      </div>
    );
  }
}

export default Waiter;
