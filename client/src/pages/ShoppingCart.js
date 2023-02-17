import React, { useEffect } from "react";
import "../style/ShoppingCart.css";

const ShoppingCart = () => {
  useEffect(() => {
    //Function to remove item
    const removeButton = document.querySelector(".remove-button");
    removeButton.addEventListener("click", (event) => {
      console.log("Remove Button clicked!");
      const removeButton = event.target; // Get the clicked button
      const shoppingCartItem = removeButton.parentElement.parentElement; // Get the shopping cart item
      shoppingCartItem.remove(); // Remove the shopping cart item from the DOM
    });
  }, []);

  return (
    <body>
      <div class="shopping-cart-container">
        <div class="shopping-cart-header">
          <h2>Shopping Cart</h2>
        </div>
        <div class="shopping-cart-items">
          <div class="shopping-cart-item">
            <img src="shirt1.jpg" alt="shirt1" />
            <div class="shopping-cart-item-info">
              <h3>Item 1</h3>
              <p>$20.00</p>
              <div class="shopping-cart-item-quantity">
                <label for="quantity">Quantity:</label>
                <p className="quantity"> 1</p>
              </div>
            </div>
            <div class="shopping-cart-item-remove">
              <button className="remove-button">Remove</button>
            </div>
          </div>
        </div>
        <div class="shopping-cart-total">
          <p>Total: $75.00</p>
        </div>
        <div class="shopping-cart-checkout">
          <button>Checkout</button>
        </div>
      </div>
    </body>
  );
};

export default ShoppingCart;
