import React from "react";
import { Button, Card } from "react-bootstrap";

const Expert = ({ expert }) => {
  const { name, img, position } = expert;
  return (
    <div className="col-12 col-lg-4 mb-4">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Contact</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Expert;
