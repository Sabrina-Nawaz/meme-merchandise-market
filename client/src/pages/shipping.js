import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const styles = {

    Navbar: {
        paddingLeft: '30%',
        paddingTop: "3%"
  
    }
  
  };

export default function Shipping() {
  return (
      <>

    <Navbar variant="light" bg="light" expand='sm'>
    
        <Navbar.Brand as={Link} to='/'>Home</Navbar.Brand>
        <Navbar.Brand > {'>'} </Navbar.Brand>
        <Navbar.Brand as={Link} to='/shipping'>Shipping and Delivery</Navbar.Brand>
        
     
    </Navbar>


    <div style={styles.Navbar}>
        
      <h2   >faq: shipping & delivery</h2>
      <h4  >Do you ship worldwide?</h4>
      <ul >
          <li >
          Yes (except Cuba, Crimea, Iran, North Korea, and Syria).
          </li>
          <li>
          Regional restrictions due to the pandemic may also affect and change where we can deliver.
          </li>
      </ul>
    </div>
    </>
  );
}