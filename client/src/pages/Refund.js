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

export default function Refund() {
  return (
      <>

    <Navbar sticky="top" variant="light" bg="light" expand='sm' style={styles.Navbar}>
    
        <Navbar.Brand as={Link} to='/' >Home</Navbar.Brand>
        <Navbar.Brand > {'>'} </Navbar.Brand>
        <Navbar.Brand as={Link} to='/shipping'>Refund Policy</Navbar.Brand>
        
     
    </Navbar>

<div style={styles.Text}>

        <h4><strong>What's your return policy?<br /></strong></h4>
    <ul>
        <li><span>All merch is <strong>custom-printed to order</strong> and is considered final sale.</span></li>
        <li><span>Claims deemed an error on our part are covered at our expense.<br /></span></li>
    </ul>
        <h4><strong>What if something arrived broken / defective?</strong></h4>
<ul>
    <li>If we messed up and your purchase arrived broken or defective in some way, we'll be happy to fix it for you. C<span>laims must be submitted within 4 weeks after the product has been received.<br /></span></li>
    <li><span>For packages lost in transit, please submit claims no later than 4 weeks after the estimated delivery date.</span></li>
</ul>
    <h4><strong>What if I ordered the wrong size?<br /></strong></h4>
<ul>
<li>We are print-on-demand, so we can't offer refunds/exchanges if you ordered the wrong size. Please always check the size charts for each product before ordering.<br /></li>
<li>We still wanna make sure you're not unsatisfied, though! So if you <em>do</em> receive something that doesn't fit, please <a title="support" href="https://shopdinosaur.com/pages/contact-us">get in touch</a> with our support team and we'll figure out the best way to help.<br /></li>
</ul>
<h4><strong>I don't like the product. Can I give it back?</strong></h4>

<p>We strive to make our customers happy, so we're truly sorry we disappointed you. All our merch is custom-made, so we don't issue refunds for customer remorse.<br /><br /><span>However, if you are <em>absolutely</em> unhappy with your order, you can ship it back to us <span><em>at your expense</em></span>. We don't have a physical store, so a 25% restocking fee will apply to arrange special warehousing and handling fees. Refunds (minus the restocking fee) will be issued once the items are received in good condition with their original packaging.<br /><br />We highly recommend re-gifting or donating it instead to avoid the environmental and financial cost of shipping them back to us.</span><br />
</p>
<h4>Still need help?</h4> 
<a href="/contact">Drop us an email.</a>
<span></span>
<span></span>
<p><strong></strong><span><br /></span></p>
<p><strong></strong><span><br /></span></p>
    </div>
    </>
  );
}
