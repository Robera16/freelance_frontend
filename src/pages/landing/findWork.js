import React from "react";
import Image from "react-bootstrap/Image";
import { Form, Button, Row, Col } from "react-bootstrap";

export default function FindWork() {
  return (
    <Row>
      <Col md={5} className="my-auto">
        <p className="display-4">Find the best job that suits you.</p>

        <Button className="m-3">Find Work</Button>
      </Col>
      <Col md={7}>
        <div
          style={{
            backgroundImage: `url(/images/background_work.png)`,
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
