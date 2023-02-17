import React from "react";
import "../style/Shopping-cart.css";
// import "../script/Cart-script.js";

const ShoppingCart = () => {
  //JS goes in here

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
              <h3>Shirt 1</h3>
              <p>$20.00</p>
              <div class="shopping-cart-item-quantity">
                <label for="quantity">Quantity:</label>
                <input type="number" id="quantity" value="1" />
              </div>
            </div>
            <div class="shopping-cart-item-remove">
              <button>Remove</button>
            </div>
          </div>
          <div class="shopping-cart-item">
            <img src="shirt2.jpg" alt="shirt2" />
            <div class="shopping-cart-item-info">
              <h3>Shirt 2</h3>
              <p>$25.00</p>
              <div class="shopping-cart-item-quantity">
                <label for="quantity">Quantity:</label>
                <input type="number" id="quantity" value="1" />
              </div>
            </div>
            <div class="shopping-cart-item-remove">
              <button>Remove</button>
            </div>
          </div>
          <div class="shopping-cart-item">
            <img src="shirt3.jpg" alt="shirt3" />
            <div class="shopping-cart-item-info">
              <h3>Shirt 3</h3>
              <p>$30.00</p>
              <div class="shopping-cart-item-quantity">
                <label for="quantity">Quantity:</label>
                <input type="number" id="quantity" value="1" />
              </div>
            </div>
            <div class="shopping-cart-item-remove">
              <button>Remove</button>
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
