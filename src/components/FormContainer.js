import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'


export default function FormContainer({children}) {
  return (
    <Container>
        <Row className='justify-content-md-center my-4'>
            <Col xs={12} md={6}>
                {children}
            </Col>
        </Row>
    </Container>
  )
}
