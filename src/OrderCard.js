import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";

const OrderCard = props => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>Orden</CardTitle>
          <CardText className="impresionPrueba">
          </CardText>
          <Button>Enviar a Cocina</Button>
        </CardBody>
      </Card>
    </div>
  );
};
export default OrderCard;