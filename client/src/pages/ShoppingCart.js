import React, { useState,useEffect } from "react";
import "../style/ShoppingCart.css";
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';

import { getMe, deleteProduct } from '../utils/API';
import Auth from '../utils/auth';
import { removeProductId } from '../utils/localStorage';


const ShoppingCart = () => {
  const [userData, setUserData] = useState({});


  // use this to determine if `useEffect()` hook needs to run again
  const userDataLength = Object.keys(userData).length;

  useEffect(() => {
    const getUserData = async () => {
      try {
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
          return false;
        }

        const response = await getMe(token);

        if (!response.ok) {
          throw new Error('something went wrong!');
        }

        const user = await response.json();
        setUserData(user);
      } catch (err) {
        console.error(err);
      }
    };

    getUserData();
  }, [userDataLength]);

  // create function that accepts the book's mongo _id value as param and deletes the book from the database
  const handleDeleteBook = async (productId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const response = await deleteProduct(productId, token);
      console.log(productId)

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const updatedUser = await response.json();
      setUserData(updatedUser);
      // upon success, remove book's id from localStorage
      removeProductId(productId);
    } catch (err) {
      console.error(err);
    }
  };

  // if data isn't here yet, say so
  if (!userDataLength) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
    <Jumbotron fluid className='text-light bg-dark'>
      <Container>
        <h1>Viewing saved products!</h1>
      </Container>
    </Jumbotron>
    <Container>
      <h2>
        {userData.savedProducts.length
          ? `Viewing ${userData.savedProducts.length} saved ${userData.savedProducts.length === 1 ? 'book' : 'books'}:`
          : 'You have no saved books!'}
      </h2>
      <CardColumns>
        {userData.savedProducts.map((product) => {
          return (
            <Card key={product.bookId} border='dark'>
              {product.image ? <Card.Img src={`img/shirts/${product.image}`} alt={`The cover for ${product.productName}`} variant='top' /> : null}
              <Card.Body>
                <Card.Title>{product.productName}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Button className='btn-block btn-danger' onClick={() => handleDeleteBook(product.bookId)}>
                  Remove
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </CardColumns>
    </Container>
         <div class="shopping-cart-checkout">
           <button>Checkout</button>
         </div>

         <span></span>
<span></span>
<p><strong></strong><span><br /></span></p>
<p><strong></strong><span><br /></span></p>
  </>

    // <body>
    //   <div class="shopping-cart-container">
    //     <div class="shopping-cart-header">
    //       <h2>Shopping Cart</h2>
    //     </div>
    //     <div class="shopping-cart-items">
    //       <div class="shopping-cart-item">
    //         <img src="shirt1.jpg" alt="shirt1" />
    //         <div class="shopping-cart-item-info">
    //           <h3>Item 1</h3>
    //           <p>$20.00</p>
    //           <div class="shopping-cart-item-quantity">
    //             <label for="quantity" class="shopping-cart-quantity-label">
    //               Quantity:
    //             </label>
    //             <p className="quantity"> 1</p>
    //           </div>
    //         </div>
    //         <div class="shopping-cart-item-remove">
    //           <button className="remove-button">Remove</button>
    //         </div>
    //       </div>
    //     </div>
    //     <div class="shopping-cart-total">
    //       <p>Total: $75.00</p>
    //     </div>
    //     <div class="shopping-cart-checkout">
    //       <button>Checkout</button>
    //     </div>
    //   </div>
    // </body>
  );
};

export default ShoppingCart;
