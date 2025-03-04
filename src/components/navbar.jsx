import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavBar = ({ scrollToSection, aboutRef, projectsRef, skillsRef, contactRef }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#">Lamidev</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => scrollToSection(aboutRef)}>About</Nav.Link>
            <Nav.Link onClick={() => scrollToSection(projectsRef)}>Projects</Nav.Link>
            <Nav.Link onClick={() => scrollToSection(skillsRef)}>Skills</Nav.Link>
            <Nav.Link onClick={() => scrollToSection(contactRef)}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
