import React, { Component } from "react";


class Sum extends Component {
  render() {
    const mapItemValue = this.props.printOrder.map(item => {
      return item.keyValue;
    });
    const totalSum = mapItemValue.reduce((acc, val) => acc + val, 0);
    return <div className="total">Total:${totalSum}</div>;
  }
}
export default Sum;
