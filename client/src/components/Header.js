import React from "react";
// import { Link } from "react-router-dom";
// import { Navbar, Nav, Container, Modal, Tab } from "react-bootstrap";
import { FaCartArrowDown } from "react-icons/fa";
import "../style/Header.css";

// import Auth from "../utils/auth";

const Header = () => {
  return (
    <header>
      {/* Navbar Section */}
      <body>
        <nav class="navbar">
          <div class="navbar-img-container navbar-img-container-left">
            <img class="navbar-img" src="img\shiba-inu-icon.png" alt="Icon of a Shiba Inu" />
          </div>
          <a class="navbar-title" href="/">
            Shiba Inu Meme Merchandise Store
          </a>
          <div class="navbar-img-container navbar-img-container-right">
            <img class="navbar-img" src="img\shiba-inu-icon.png" alt="Banner of a cute Shiba Inu" />
          </div>
          <a href="/login">
            <button class="navbar-login-btn">Login</button>
          </a>
          <a href="/ShoppingCart">
            <button class="navbar-cart-btn">
              <FaCartArrowDown size="25px" color="white" />
            </button>
          </a>
        </nav>
      </body>

      {/* Category Bar Section */}
      <nav class="categorybar">
        <div class="categorybar-middle">
          <a class="categorybar-btn" href="/Shirts">
            Shirts
          </a>
          {/* <a class="categorybar-btn" href="/Hoodies">
            Hoodies
          </a> */}
          <a class="categorybar-btn" href="/Sweatshirts">
            Sweatshirts
          </a>
          <a class="categorybar-btn" href="/Hats">
            Hats
          </a>
          <a class="categorybar-btn" href="/Others">
            Others
          </a>
        </div>
        <div class="categorybar-search-container">
          <form action="#">
            <input type="text" placeholder="Search..." class="categorybar-search-input" />
            <button type="submit" class="categorybar-search-btn">
              <i class="fa fa-search"></i>
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
};

export default Header;
