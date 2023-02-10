import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const styles = {

    Text: {
        paddingTop: "3%",
        paddingLeft: '20%',
        paddingRight: '20%',
  
    },

    Navbar: {
       textAlign: 'right',
       justifyContent: 'left',
    }
  
  };

export default function Privacy() {
  return (
      <>

    <Navbar sticky="top" variant="light" bg="light" expand='sm' style={styles.Navbar}>
    
        <Navbar.Brand as={Link} to='/' >Home</Navbar.Brand>
        <Navbar.Brand > {'>'} </Navbar.Brand>
        <Navbar.Brand as={Link} to='/shipping'>Privacy policy</Navbar.Brand>
        
     
    </Navbar>



    </>
  );
}
