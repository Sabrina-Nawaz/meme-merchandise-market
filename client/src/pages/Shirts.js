import React, { useState, useEffect } from "react";
import "../style/Shirts.css";

const Home = () => {
  return (
    <div class="catalog">
      <div class="catalog-item">
        <img src="./item1.jpg" alt="Item 1" />
        <h3>Shiba Inu Mug</h3>
        <p>$12.99</p>
      </div>
      <div class="catalog-item">
        <img src="./item2.jpg" alt="Item 2" />
        <h3>Shiba Inu T-Shirt</h3>
        <p>$19.99</p>
      </div>
      <div class="catalog-item">
        <img src="./item3.jpg" alt="Item 3" />
        <h3>Shiba Inu Phone Case</h3>
        <p>$14.99</p>
      </div>
    </div>
  );
};

export default Home;
