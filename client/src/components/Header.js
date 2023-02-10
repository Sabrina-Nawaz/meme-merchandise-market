import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Modal, Tab } from "react-bootstrap";
import SignUpForm from "./SignupForm";
import LoginForm from "./LoginForm";
import "../style/Header.css";

import Auth from "../utils/auth";

const Header = () => {
  return (
    <header>
      {/* Navbar Section */}
      <body>
        <nav class="navbar">
          <div class="navbar-img-container navbar-img-container-left">
            <img class="navbar-img" src="img\shiba-inu-icon.png"></img>
          </div>
          <div class="navbar-title">Shiba Inu Meme Merchandise Store</div>
          <div class="navbar-img-container navbar-img-container-right">
            <img class="navbar-img" src="img\shiba-inu-icon.png"></img>
          </div>
          <button class="navbar-login-btn">Login</button>
          <button class="navbar-cart-btn"></button>
        </nav>
      </body>

      {/* Category Bar Section */}
      <nav class="categorybar">
        <div class="categorybar-middle">
          <a class="categorybar-btn" href="#">
            Shirts
          </a>
          <a class="categorybar-btn" href="#">
            Hoodies
          </a>
          <a class="categorybar-btn" href="#">
            Sweatshirts
          </a>
          <a class="categorybar-btn" href="#">
            Hats
          </a>
          <a class="categorybar-btn" href="#">
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
