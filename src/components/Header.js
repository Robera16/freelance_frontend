import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


export default function Header() {
  const userInfo = null
  return (
    <header>
      <Navbar bg="primary" variant="dark" className="py-3 navbar-default">
      <Container>
        <LinkContainer to='/' >
           <Navbar.Brand>Ethio-Freelance</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        {userInfo ? (
          <React.Fragment>
            <LinkContainer to='/'>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to=''>
              <Nav.Link>Features</Nav.Link>
            </LinkContainer>
            <LinkContainer to=''>
              <Nav.Link>Pricing</Nav.Link>
            </LinkContainer>
          </React.Fragment>
        ): (
          <>
            <LinkContainer to='/talent'>
              <Nav.Link>Find Talent</Nav.Link>
            </LinkContainer>

            <LinkContainer to='/work'>
              <Nav.Link>Find Work</Nav.Link>
            </LinkContainer>

            <LinkContainer to='/whyus'> 
              <Nav.Link>Why Us</Nav.Link>
            </LinkContainer>
          </>
          )}
        </Nav>

        <Nav>
          <LinkContainer to="/login">
            <Nav.Link>Log In</Nav.Link>
          </LinkContainer>

          <LinkContainer to='/signup'>
            <Nav.Link>Sign Up</Nav.Link>
          </LinkContainer>
        </Nav>

        </Navbar.Collapse>
      </Container>
      </Navbar>
    </header>
  )
}
