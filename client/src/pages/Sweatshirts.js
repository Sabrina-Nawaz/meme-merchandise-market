import React, { useState, useEffect } from "react";
import "../style/Sweatshirts.css";

const Home = () => {
  return (
    <div class="catalog">
      <div class="catalog-item">
        <img src="img\sweatshirts\Sweatshirt-1.jpg" alt="Shiba Sweatshirt" />
        <h3>Shiba Inu Sweatshirt 1</h3>
        <p>$34.99</p>
      </div>
      <div class="catalog-item">
        <img src="img\sweatshirts\Sweatshirt-2.jpg" alt="Shiba Sweatshirt" />
        <h3>Shiba Inu Sweatshirt 2</h3>
        <p>$19.99</p>
      </div>
      <div class="catalog-item">
        <img src="img\sweatshirts\Sweatshirt-3.jpg" alt="Shiba Sweatshirt" />
        <h3>Shiba Inu Sweatshirt 3</h3>
        <p>$14.99</p>
      </div>
      <div class="catalog-item">
        <img src="img\sweatshirts\Sweatshirt-4.jpg" alt="Shiba Sweatshirt" />
        <h3>Shiba Inu Sweatshirt 4</h3>
        <p>$12.99</p>
      </div>
      <div class="catalog-item">
        <img src="img\sweatshirts\Sweatshirt-5.jpg" alt="Shiba Sweatshirt" />
        <h3>Shiba Inu Sweatshirt 5</h3>
        <p>$7.99</p>
      </div>
      <div class="catalog-item">
        <img src="img\sweatshirts\Sweatshirt-6.jpg" alt="Shiba Sweatshirt" />
        <h3>Shiba Inu Sweatshirt 6</h3>
        <p>$3.99</p>
      </div>
    </div>
  );
};

export default Home;
