import React from "react";
import Image from "react-bootstrap/Image";
import { Form, Button, Row, Col } from "react-bootstrap";

export default function FindTalent() {
  return (
    <Row>
      <Col md={5} className="my-auto">
        <p className="display-4">Get yourself a talent for the best price.</p>
        <Button className="m-3 ml-0">Find Talent</Button>
      </Col>
      <Col md={7}>
        <div
          style={{
            backgroundImage: `url(/images/contract_background.png)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "55vw",
            height: "100vh",
          }}
        ></div>
      </Col>
    </Row>
  );
}
