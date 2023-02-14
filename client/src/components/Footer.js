import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitterSquare, FaFacebook, FaInstagram } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const styles = {

  fontcolor: {
      backgroundColor: 'goldenrod',

  }

};

function Footer() {
    return (
      <>
      <Navbar sticky="bottom" fixed="bottom" expand='lg' style={styles.fontcolor}>
        <Container>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/shipping'>Shipping and Delivery</Nav.Link>
            <Nav.Link as={Link} to='/refund'>Refund Policy</Nav.Link>
            <Nav.Link as={Link} to='/privacy'>Privacy Policy</Nav.Link>
            <Nav.Link as={Link} to='/'>About Us</Nav.Link>
            <Nav.Link as={Link} to='/contact'>Contact Us</Nav.Link>
            
          </Nav>
          
          <Nav>
          <Navbar.Brand>Follow Us:</Navbar.Brand>
          <Nav.Link href="https://github.com/" target="_blank"><FaGithub size="15px" color="white"/></Nav.Link>
          <Nav.Link href="https://www.linkedin.com/home" target="_blank"><FaLinkedinIn size="15px" color="white"/></Nav.Link>
          <Nav.Link href="https://twitter.com/" target="_blank"><FaTwitterSquare size="15px" color="white"/></Nav.Link>
          <Nav.Link href="https://www.facebook.com/" target="_blank"><FaFacebook size="15px" color="white"/></Nav.Link>
          <Nav.Link href="https://www.instagram.com/" target="_blank"><FaInstagram size="15px" color="white"/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>

  
       </>
    );
}

export default Footer;