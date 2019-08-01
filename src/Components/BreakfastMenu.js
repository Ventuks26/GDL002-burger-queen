import React, { Component } from "react";
import Breakfast from "./breakfast.json";


class MenuBreakfast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breakfast: Breakfast,
      order: [],
      printOrder: []
    };
  }
  addItem = event => {
    const target = event.currentTarget;
    const keyDescription = target.getAttribute("name");
    const keyPrice = target.getAttribute("value");
    const container = document.getElementsByClassName("print-order")[0];
    container.innerHTML = " ";

    console.log(keyDescription, keyPrice);

    const object = {
      keyDescription,
      keyPrice
    };

    this.setState(
      {
        printOrder: [...this.state.printOrder, object]
      },
      () => {
        console.log(this.state.printOrder);
        this.state.printOrder.forEach((item, i) => {
          container.innerHTML += `<li>${item.keyDescription}  $${
            item.keyPrice
          }  <button className="delete" ><img src="https://i.postimg.cc/V6dfZxS2/delete.png"></button></li>`;
        });
        this.total();
      }
    );

    console.log(this.state.printOrder);
  };
  total() {
    const mapItemValue = this.state.printOrder.map(item => {
      let value = parseInt(item.keyPrice);
      return value;
    });
    const totalSum = mapItemValue.reduce((acc, val) => acc + val, 0);
    console.log(totalSum);
    const prinTotal = document.getElementsByClassName("print-total")[0];
    prinTotal.innerHTML = `Total: $  ${totalSum}.00`;

    return totalSum;
  }

  delete(item, i) {
    this.state.printOrder.forEach(printOrder => {
      if (printOrder.item.keyDescription === item.keyDescription) {
        printOrder.item.keyDescription--;
      } else {
        this.state.printOrder.splice(i, 1);
      }
      this.setState({
        state: this.state
      });
    });
  }

  render() {
    return (
      <div>
        {Breakfast.breakfast.map((btnBreakfast, i) => (
          <button
            className="mealBtn"
            onClick={this.addItem}
            type="submit"
            key={i}
            name={Breakfast.breakfast[i].description}
            value={Breakfast.breakfast[i].value}
          >
            {btnBreakfast.description}
            {btnBreakfast.price}
          </button>
        ))}
      </div>
    );
  }
}
export default MenuBreakfast;
