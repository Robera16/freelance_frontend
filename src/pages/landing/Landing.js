import React from "react";
import Image from "react-bootstrap/Image";
import { Form, Button, Row, Col } from "react-bootstrap";

export default function Landing() {
  const background = "../../../public/images/Working_at_home_vector.jpg";
  return (
    <Row>
      <Col md={5} className="my-auto">
        <p className="display-1">Get to work</p>
        <p className="display-1">Right away</p>
        <p className="lead">
          Start doing what you are skilled with. You have the freedom to choose
          from all the works available.
        </p>
        <Button className="m-3 ml-0">Find Talent</Button>
        <Button className="m-3">Find Work</Button>
      </Col>
      <Col md={7}>
        <div
          style={{
            backgroundImage: `url(/images/background.png)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "50vw",
            height: "100vh",
          }}
        ></div>
      </Col>
    </Row>
  );
}
