import React from "react";
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

  return (
    <div class="catalog">
      <div class="catalog-item">
        <img src="img\shirts\shirt-1.jpg" alt="Shiba Inu T-Shirt" />
        <h3>Shiba Inu T-Shirt 1</h3>
        <p>$29.99</p>
        {Auth.loggedIn() && (
          <Button
            disabled={savedBookIds?.some((savedBookId) => savedBookId === book.bookId)}
            className="btn-block btn-info"
            onClick={() => handleSaveBook(book.bookId)}>
            {savedBookIds?.some((savedBookId) => savedBookId === book.bookId)
              ? "This book has already been saved!"
              : "Save this Book!"}
          </Button>
        )}
        <button class="add-to-cart-btn">Add to Cart</button>
      </div>
      <div class="catalog-item">
        <img src="img\shirts\shirt-2.jpg" alt="Shiba Inu T-Shirt" />
        <h3>Shiba Inu T-Shirt 2</h3>
        <p>$29.99</p>
        <button class="add-to-cart-btn">Add to Cart</button>
      </div>
      <div class="catalog-item">
        <img src="img\shirts\shirt-3.jpg" alt="Shiba Inu T-Shirt" />
        <h3>Shiba Inu T-Shirt 3e</h3>
        <p>$29.99</p>
        <button class="add-to-cart-btn">Add to Cart</button>
      </div>
      <div class="catalog-item">
        <img src="img\shirts\shirt-4.jpg" alt="Shiba Inu T-Shirt" />
        <h3>Shiba Inu T-Shirt 4</h3>
        <p>$29.99</p>
        <button class="add-to-cart-btn">Add to Cart</button>
      </div>
      <div class="catalog-item">
        <img src="img\shirts\shirt-5.jpg" alt="Shiba Inu T-Shirt" />
        <h3>Shiba Inu T-Shirt 5</h3>
        <p>$29.99</p>
        <button class="add-to-cart-btn">Add to Cart</button>
      </div>
      <div class="catalog-item">
        <img src="img\shirts\shirt-6.jpg" alt="Shiba Inu T-Shirt" />
        <h3>Shiba Inu T-Shirt 6</h3>
        <p>$29.99</p>
        <button class="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default Home;
