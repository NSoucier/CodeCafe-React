import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function Item({ snacks, drinks, cantFind }) {
  const { id } = useParams();
  let item;

  if (!!snacks) { // checks if it's a snack item
    item = snacks.find(snack => snack.id === id);
    if (!item) return <Redirect to={cantFind} />;
  } else { // otherwise it's a drink item
    item = drinks.find(drink => drink.id === id);
    if (!item) return <Redirect to={cantFind} />;
  }

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {item.name}
          </CardTitle>
          <CardText className="font-italic">{item.description}</CardText>
          <p>
            <b>Recipe:</b> {item.recipe}
          </p>
          <p>
            <b>Served:</b> {item.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default Item;
