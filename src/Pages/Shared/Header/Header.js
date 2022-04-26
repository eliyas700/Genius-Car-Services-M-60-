import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

import logo from "../../../images/logo.png";
import PageTitle from "../PageTitle/PageTitle";

const Header = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <>
      <PageTitle title="Home"></PageTitle>
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="lg"
        bg="primary"
        variant="dark"
      >
        <Container className="">
          <Navbar.Brand as={Link} to="/">
            <img height={"30px"} src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="home#services">Services</Nav.Link>
              <Nav.Link href="home#experts">Experts</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>

              {user && (
                <>
                  <Nav.Link as={Link} to="/addservice">
                    Add Service
                  </Nav.Link>
                  <Nav.Link as={Link} to="/manage">
                    Manage Services
                  </Nav.Link>
                  <Nav.Link as={Link} to="/order">
                    Orders
                  </Nav.Link>
                </>
              )}

              {!user ? (
                <Nav.Link as={Link} to="/login">
                  Log In
                </Nav.Link>
              ) : (
                <button
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "white",
                  }}
                  onClick={handleSignOut}
                >
                  <span>
                    <small>
                      <img
                        title={user.email}
                        height={28}
                        className="rounded-circle"
                        src={user.photoURL}
                        alt={user.displayName}
                        srcset=""
                      />
                    </small>
                  </span>{" "}
                  Sign Out
                </button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
