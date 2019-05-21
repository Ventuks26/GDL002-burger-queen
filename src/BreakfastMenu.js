import React, { Component } from "react";
import Breakfast from "./breakfast.json";

class MenuBreakfast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breakfast:Breakfast,
      order: [],
      printOrder:[]
      
    };

    
  }
  addItem = (event) => {
        const target = event.currentTarget;
        const keyDescription = target.getAttribute("name");
        const keyPrice = target.getAttribute("value");
        const container = document.getElementsByClassName("impresionPrueba")[0];
        container.innerHTML=keyDescription;
        console.log(keyDescription, keyPrice)

        const object = {
            keyDescription,
            keyPrice
        }

        this.setState ({
            printOrder: [...this.state.printOrder, object]
            }, () => console.log(this.state.printOrder))
    }
    
  render() {
    console.log(Breakfast.breakfast[0]);
    return (
      <div>
        {Breakfast.breakfast.map((btnBreakfast, i) => (
          <button
            className="breakfastBtn"
            
            onClick={this.addItem}
            type="submit"
            key={i}
            name={Breakfast.breakfast[i].description} 
            value={Breakfast.breakfast[i].price}
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
