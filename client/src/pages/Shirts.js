import React, { useState, useEffect } from "react";
import "../style/Shirts.css";

import Auth from "../utils/auth";

const Home = () => {
  // //Creating State
  // const [searchedProduct, setSearchedProduct] = useState([]);

  // // create state to hold saved productId values
  // const [savedProductIds, setSavedProductIds] = useState(getSavedProductIds());

  // // create function to handle saving a product to our database
  // const handleSaveProduct = async (productId) => {
  //   // find the product in `searchedProducts` state by the matching id
  //   const productToSave = searchedProducts.find((product) => product.productId === productId);

  //   // get token
  //   const token = Auth.loggedIn() ? Auth.getToken() : null;

  //   if (!token) {
  //     return false;
  //   }

  //   try {
  //     // const response = await saveProduct(productToSave, token);

  //     if (!response.ok) {
  //       throw new Error("something went wrong!");
  //     }

  //     // if product successfully saves to user's account, save product id to state
  //     setSavedProductIds([...savedProductIds, productToSave.productId]);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch(`/api/products`, {
  //         method: "GET",
  //       });
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       const data = await response.json();
  //       setData(data);
  //     } catch (error) {
  //       console.error("Error fetching posts:", error);
  //     }
  //   }
  //   fetchData();
  // }, []);

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
          {product.category === "Shirts" ? (
            <img src={`img/shirts/${product.image}`} width="400" height="500" alt="Shiba Inu T- Shirt" />
          ) : (
            <spam></spam>
          )}
          {product.category === "Shirts" ? <h3>{product.description}</h3> : <spam></spam>}
          {product.category === "Shirts" ? <p>${product.price}</p> : <spam></spam>}
          {product.category === "Shirts" ? (
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
