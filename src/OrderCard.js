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
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Button>Enviar a Cocina</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default OrderCard;
