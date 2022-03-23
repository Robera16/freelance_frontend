import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
export default function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>&copy;2022 Ethio-Freelance</Col>
        </Row>
      </Container>
    </footer>
  )
}
