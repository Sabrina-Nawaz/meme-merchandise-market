import React, { useState, useEffect } from "react";
import "../style/Shirts.css";
import { Button } from "react-bootstrap";

import Auth from "../utils/auth";
import { saveProductIds, getSavedProductIds } from "../utils/localStorage";
import { saveProduct, searchGoogleBooks } from "../utils/API";

const Home = () => {
  // create state to hold saved product values
  const [savedProductIds, setSavedProductIds] = useState(getSavedProductIds());
  const [data, setData] = useState([]);

  //On load, we are setting whatever is saved in local storage to state,
  useEffect(() => {
    return () => saveProductIds(savedProductIds);
  });

  // create function to handle saving a book to our database
  const handleSaveProduct = async (productId) => {
    console.log(productId);
    const productToSave = data.find((product) => product._id === productId);

    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }
    try {
      const response = await saveProduct(productToSave, token);

      if (!response.ok) {
        throw new Error("something went wrong!");
      }

      // if product successfully saves to user's account, save product id to state
      setSavedProductIds([...savedProductIds, productToSave._id]);
    } catch (err) {
      console.error(err);
    }
  };
  //Function to connect to the back end to fetch product data
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
          {product.category === "Shirts" ? (
            <img src={`img/shirts/${product.image}`} width="400" height="500" alt="Shiba Inu T- Shirt" />
          ) : (
            <spam></spam>
          )}
          {product.category === "Shirts" ? <h3>{product.description}</h3> : <spam></spam>}
          {product.category === "Shirts" ? <p>${product.price}</p> : <spam></spam>}

          {Auth.loggedIn() && (
            <Button
              disabled={savedProductIds?.some((savedProductId) => savedProductId === product._id)}
              className="add-to-cart-btn"
              onClick={() => handleSaveProduct(product._id)}>
              {savedProductIds?.some((savedProductId) => savedProductId === product._id)
                ? "This Product has already been added to cart!"
                : "Add to cart"}
            </Button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Home;
