import React from 'react'
import FormContainer from '../../components/FormContainer'
import {Link} from 'react-router-dom'
import {Form ,Button, Row, Col} from 'react-bootstrap'

export default function Login() {
  return (
    <FormContainer>
     <h1>Log In</h1>
        
        <Form>
            <Form.Group controlId='email'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                    type='email'
                    placeholder='Enter Email'
                />
            </Form.Group>

            <Form.Group controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type='password'
                    placeholder='Enter Password'
                />
            </Form.Group>

            <Button type='submit' variant='primary' className = 'my-3'> 
                Log In
            </Button>
        </Form>

        <Row className = 'py-3'>
            <Col>
                Do not have an account ? <Link to="/signup" style={{ textDecoration: 'none' }}>Register</Link>
            </Col>
        </Row>
    </FormContainer>
  )
}
