import React, { useState, useEffect } from "react";
import "../style/Hats.css";

const Home = () => {
  return (
    <div class="catalog">
      <div class="catalog-item">
        <img src="img\hats\Hat-1.jpg" alt="Shiba Inu Hat" />
        <h3>Shiba Inu Hat 1</h3>
        <p>$34.99</p>
      </div>
      <div class="catalog-item">
        <img src="img\hats\Hat-2.jpg" alt="Shiba Inu Hat" />
        <h3>Shiba Inu Hat 2</h3>
        <p>$19.99</p>
      </div>
      <div class="catalog-item">
        <img src="img\hats\Hat-3.jpg" alt="Shiba Inu Hat" />
        <h3>Shiba Inu Hat 3e</h3>
        <p>$14.99</p>
      </div>
      <div class="catalog-item">
        <img src="img\hats\Hat-4.jpg" alt="Shiba Inu Hat" />
        <h3>Shiba Inu Hat 4</h3>
        <p>$12.99</p>
      </div>
      <div class="catalog-item">
        <img src="img\hats\Hat-5.jpg" alt="Shiba Inu Hat" />
        <h3>Shiba Inu Hat 5</h3>
        <p>$7.99</p>
      </div>
      <div class="catalog-item">
        <img src="img\hats\Hat-6.jpg" alt="Shiba Inu Hat" />
        <h3>Shiba Inu Hat 6</h3>
        <p>$3.99</p>
      </div>
    </div>
  );
};

export default Home;
