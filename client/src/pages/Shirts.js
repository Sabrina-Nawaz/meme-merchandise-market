import React, { useState, useEffect } from "react";
import "../style/Shirts.css";

import Auth from "../utils/auth";

const Home = () => {
  //Creating State
  const [searchedBooks, setSearchedBooks] = useState([]);

  // create state to hold saved bookId values
  const [savedBookIds, setSavedBookIds] = useState(getSavedBookIds());

  // create function to handle saving a book to our database
  const handleSaveBook = async (bookId) => {
    // find the book in `searchedBooks` state by the matching id
    const bookToSave = searchedBooks.find((book) => book.bookId === bookId);

    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const response = await saveBook(bookToSave, token);

      if (!response.ok) {
        throw new Error("something went wrong!");
      }

      // if book successfully saves to user's account, save book id to state
      setSavedBookIds([...savedBookIds, bookToSave.bookId]);
    } catch (err) {
      console.error(err);
    }
  };

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
      <div class="catalog-item">
        <img src="img\shirts\shirt-1.jpg" alt="Shiba Inu T-Shirt" />
        <h3>Shiba Inu T-Shirt 1</h3>
        <p>$29.99</p>
        <button class="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default Home;
