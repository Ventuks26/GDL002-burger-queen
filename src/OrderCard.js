import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const OrderCard = props => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>Orden</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText className="impresionPrueba">
            
          </CardText>
          <Button>Enviar a Cocina</Button>
        </CardBody>
      </Card>
    </div>
  );
};
export default OrderCard;