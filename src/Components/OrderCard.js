import React from "react";
import { CardText, CardTitle, Button } from "reactstrap";

const OrderCard = props => {
  return (
    
      <div className="card-order col-sm-6">
        <CardTitle className="card-title">Orden</CardTitle>
        <CardText className="print-order"></CardText>
        <CardText className="print-total">
        </CardText>
        <Button className="sendToKitchen">Enviar a Cocina</Button>
      </div>
    
  );
};
export default OrderCard;
