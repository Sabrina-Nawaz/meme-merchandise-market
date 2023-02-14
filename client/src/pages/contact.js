import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const styles = {

    Text: {
        width: '100%',
        position: 'relative',
  
    },

    Column: {
       display: 'flex',
        flexDirection: 'column',
    },
    Navbar: {
        textAlign: 'right',
        justifyContent: 'left',
     }
   
  
  };

  

export default function Contact() {
    const [formStatus, setFormStatus] = React.useState('Send')
    const onSubmit = (e) => {
      e.preventDefault()
      setFormStatus('Submitting...')
      const { name, email, message } = e.target.elements
      let conFom = {
        name: name.value,
        email: email.value,
        message: message.value,
      }
      console.log(conFom)
    }
  return (
      <>

    <Navbar sticky="top" variant="light" bg="light" expand='sm' style={styles.Navbar}>
    
        <Navbar.Brand as={Link} to='/' >Home</Navbar.Brand>
        <Navbar.Brand > {'>'} </Navbar.Brand>
        <Navbar.Brand as={Link} to='/contact'>Contact Us</Navbar.Brand>
    </Navbar>
    <div className="container mt-5" >
      <h2 className="m-4">Please Contact Us :)</h2>
      <form onSubmit={onSubmit} className= "border-dark rounded m-4" style={styles.Column}>
        <div className="m-4" style={styles.Text}>
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input  className="form-control" type="text" id="name" placeholder="John Smith" required />
        </div>
        <div className="m-4" style={styles.Text}>
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" placeholder="name@example.com" required />
        </div>
        <div className="m-4" style={styles.Text}>
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
    </>
  );
}
