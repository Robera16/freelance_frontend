import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";
import { Link, useHistory } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import { StreamChat } from "stream-chat";
import { useState, useEffect } from "react";
import Badge from "react-bootstrap/esm/Badge";

export default function Header() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const history = useHistory();
  const [unread, setUnread] = useState(null);

  const dispatch = useDispatch();

  const logoutHandler = () => {
    const apiKey = process.env.REACT_APP_STREAM_API_KEY;

    const chatClient = StreamChat.getInstance(apiKey);
    chatClient.disconnectUser();

    dispatch(logout());
    history.push("/");
  };

  useEffect(() => {
    async function init() {
      console.log("just do it");
      const apiKey = process.env.REACT_APP_STREAM_API_KEY;

      const user = {
        id: userInfo.id.toString(),
        name: userInfo.first_name,
        image: "https://getstream.imgix.net/images/random_svg/FS.png",
      };

      const chatClient = StreamChat.getInstance(apiKey);

      const data = await chatClient.connectUser(
        user,
        chatClient.devToken(user.id)
      );
      console.log(data);
      setUnread(data.me.total_unread_count);
      console.log(unread);
    }
    userInfo && init();
  }, [unread]);

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

            <LinkContainer to='/features'>
              <Nav.Link>Features</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/pricing'>
              <Nav.Link>Pricing</Nav.Link>
            </LinkContainer>
            {userInfo.applyAs==="hirer" &&
            <LinkContainer to='/multi-step'>
              <Nav.Link>Post Job</Nav.Link>
            </LinkContainer>
            }
          </React.Fragment>
        ): (
          <>
            <LinkContainer to='/talent'>
              <Nav.Link>Find Talent</Nav.Link>
            </LinkContainer>

                  <LinkContainer to="/work">
                    <Nav.Link>Find Work</Nav.Link>
                  </LinkContainer>

                  <LinkContainer to="/whyus">
                    <Nav.Link>Why Us</Nav.Link>
                  </LinkContainer>
                </>
              )}
            </Nav>

            <Nav>
              {userInfo ? (
                <>
                  <LinkContainer to="/chat">
                    <Nav.Link>
                      Chat{unread > 0 && <Badge bg="danger">{unread}</Badge>}
                    </Nav.Link>
                  </LinkContainer>
                  <NavDropdown title={userInfo.first_name} id="username">
                    <LinkContainer to={`/profile/${userInfo.id}`}>
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <React.Fragment>
                  <LinkContainer to="/login">
                    <Nav.Link>Log In</Nav.Link>
                  </LinkContainer>

                  <LinkContainer to="/signup">
                    <Nav.Link>Sign Up</Nav.Link>
                  </LinkContainer>
                </React.Fragment>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
