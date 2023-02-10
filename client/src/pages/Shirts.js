import React, { useState, useEffect } from "react";
import "../style/Shirts.css";

const Home = () => {
  return (
    <div class="catalog">
      <div class="catalog-item">
        <img src="img\shirts\shirt-1.jpg" alt="Shiba Inu Hoodie" />
        <h3>Shiba Inu T-Shirt 1</h3>
        <p>$34.99</p>
      </div>
      <div class="catalog-item">
        <img src="img\shirts\shirt-2.jpg" alt="Shiba Inu T-Shirt" />
        <h3>Shiba Inu T-Shirt 2</h3>
        <p>$19.99</p>
      </div>
      <div class="catalog-item">
        <img src="img\shirts\shirt-3.jpg" alt="Shiba Inu Phone Case" />
        <h3>Shiba Inu T-Shirt 3e</h3>
        <p>$14.99</p>
      </div>
      <div class="catalog-item">
        <img src="img\shirts\shirt-4.jpg" alt="Shiba Inu Mug" />
        <h3>Shiba Inu T-Shirt 4</h3>
        <p>$12.99</p>
      </div>
      <div class="catalog-item">
        <img src="img\shirts\shirt-5.jpg" alt="Shiba Inu Keychain" />
        <h3>Shiba Inu T-Shirt 5</h3>
        <p>$7.99</p>
      </div>
      <div class="catalog-item">
        <img src="img\shirts\shirt-6.jpg" alt="Shiba Inu Sticker" />
        <h3>Shiba Inu T-Shirt 6</h3>
        <p>$3.99</p>
      </div>
    </div>
  );
};

export default Home;
