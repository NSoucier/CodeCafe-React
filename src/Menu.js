import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Menu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem,
  Button,
} from "reactstrap";

function Menu({ snacks, drinks }) {
  const history = useHistory();
  let menu;
  let type;

  if (!!snacks) {
    // render snack menu
    menu = snacks;
    type = "Snack";
  } else {
    // render drink menu
    menu = drinks;
    type = "Drink";
  }

  // handle button click to add new item
  const handleClick = (evt) => {
    evt.preventDefault();
    history.push(`/new-item/${type.toLowerCase()}`);
  };

  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {type} Menu
          </CardTitle>
          <CardText>
            Please browse our current offerings below and click on each item for
            more information.
          </CardText>
          <ListGroup>
            {menu.map((item) => (
              <Link to={`/${type}s/${item.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
          <Button className="addItem" onClick={handleClick}>Add {type}</Button>
        </CardBody>
      </Card>
    </section>
  );
}

export default Menu;
