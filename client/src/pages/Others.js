import React, { useState, useEffect } from "react";
import "../style/Others.css";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/api/products`, {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }
    fetchData();
  }, []);
  return (
    <div class="catalog">
      {data.map((product) => (
        <div key={product._id} class="catalog-item">
          {product.category === "Others" ? (
            <img src={`img/other/${product.image}`} width="400" height="500" alt="Shiba Inu Merchandise" />
          ) : (
            <spam></spam>
          )}
          {product.category === "Others" ? <h3>{product.description}</h3> : <spam></spam>}
          {product.category === "Others" ? <p>${product.price}</p> : <spam></spam>}
          {product.category === "Others" ? (
            <button class="add-to-cart-btn">Add to Cart</button>
          ) : (
            <spam></spam>
          )}
        </div>
      ))}
    </div>
  );
};

export default Home;
