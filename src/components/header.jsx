import React from "react";
import { Row } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';

const Header = () => {
  const imageUrl = "https://dosacharcoal.com/wp-content/uploads/2022/05/dc-logo-png.black_.png";
  return (
    <Navbar bg="dark" variant="dark" expand="md" className="py-3">
      <Container>
        <Row>
         <Col> <Navbar.Brand href="#home">
          <img
            src={imageUrl}
            alt="Dosa Charcoal Logo"  
            width={300}
            className="d-inline-block align-top img-fluid"
          />
        </Navbar.Brand>
        </Col>
        <Col className="d-flex ">
          <div className="d-flex text-white  align-items-center">
            <ul className="list-unstyled mb-0 d-flex gap-3 ">
            <li>MENU</li>
            <li>ABOUT US</li>
            <li>GALLERY</li> 
          </ul>
          </div>
        </Col>
        </Row>
      </Container>
    </Navbar>

  );
};

export default Header;
