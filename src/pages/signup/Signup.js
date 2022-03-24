import React from 'react'
import FormContainer from '../../components/FormContainer'
import {Link} from 'react-router-dom'
import {Form ,Button, Row, Col} from 'react-bootstrap'

export default function Signup() {
  return (
    <FormContainer>
     <h1>Sign Up</h1>
        
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

            <Form.Group controlId='password'>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                    type='password'
                    placeholder='Re-Enter Password'
                />
            </Form.Group>
            
            <Form.Group>
                <Form.Label>Apply as</Form.Label>
                <Form.Check name="gender"  label="Freelancer" type="radio"/>
                <Form.Check name="gender"  label="Hirer" type="radio"/>
            </Form.Group> 


            <Form.Group className="mb-3">
                <Form.Label>Enter Location</Form.Label>
                <Form.Select>
                    <option>Akaki Kality</option>
                    <option>Nifas Silk</option>
                    <option>Bole</option>
                    <option>Gulele</option>
                    <option>Yeka</option>
                    <option>Gerji</option>
                    <option>Sululta</option>
                    <option>Kirkos</option>
                    <option>Arada</option>
                    <option>Addis Ketema</option>
                    <option>Jemo</option>
                    <option>Kolfe-Keranio</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mt-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Yes, I understand and agree to the Ethio-Freelance Terms of Service, including the User Agreement and Privacy Policy." />
            </Form.Group>

            <Button type='submit' variant='primary' className = 'my-3'> 
                Sign Up
            </Button>
        </Form>

        <Row className = 'py-3'>
            <Col>
                Already have an account ? <Link to="/login" style={{ textDecoration: 'none' }}>Log In</Link>
            </Col>    
        </Row>
    </FormContainer>
  )
}
