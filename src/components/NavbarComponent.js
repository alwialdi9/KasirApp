import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <Navbar variant="dark">
      <Container>
        <Navbar.Brand>
          <strong>Kasir App</strong>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
