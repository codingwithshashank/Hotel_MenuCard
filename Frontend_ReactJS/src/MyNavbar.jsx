import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MyNavbar.css'; // Optional, for custom styling
import logo from 'C:/Users/shashank/Desktop/Hotal_Project/DIGIMENU REACT JS/digimenu/favicon.png'; // Ensure the correct path to your logo

export default function MyNavbar() {
  const menuLink = `${window.location.origin}/MenuCard`; // This generates the URL for the MenuCard page

  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="#home" style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={logo}
              alt="Logo"
              width="40" // Adjust the width as needed
              height="40" // Adjust the height as needed
              style={{ marginRight: '10px' }} // Add margin to the right of the logo
            />
            DIGITAL MENU CARD
          </Navbar.Brand>
          <br></br>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/MyAbout">MyAbout</Nav.Link>
            <Nav.Link as={Link} to="/MenuCard">Menu Card</Nav.Link>
            <Nav.Link as={Link} to="/Qtymast">Qtymast</Nav.Link>
            <Nav.Link as={Link} to="/MyFoodgroup">MyFoodgroup</Nav.Link>
            <Nav.Link as={Link} to="/MyMenu">MyMenu</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
