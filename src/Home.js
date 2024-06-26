import React from "react";
import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";

function Home({ snacks, drinks }) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle className="font-weight-bold" tag="h3">
              Welcome to Silicon Valley's premier coding cafe!
          </CardTitle>
          <CardSubtitle className="mb-2" tag="h5">
              Availability: {snacks.length} snacks & {drinks.length} drinks
          </CardSubtitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
