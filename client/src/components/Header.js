import React, { useState } from "react";
//import { Link } from "react-router-dom";
import { Nav, Modal, Tab } from "react-bootstrap";
import { FaCartArrowDown } from "react-icons/fa";
import "../style/Header.css";
import SignUpForm from "./SignupForm";
import LoginForm from "./LoginForm";

import Auth from "../utils/auth";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <header>
        {/* Header Section */}
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
            {Auth.loggedIn() ? (
              <>
                <a href="/">
                  <button class="navbar-login-btn" onClick={Auth.logout}>
                    Logout
                  </button>
                </a>
                <a href="/ShoppingCart">
                  <button class="navbar-cart-btn">
                    <FaCartArrowDown size="25px" color="white" />
                  </button>
                </a>
              </>
            ) : (
              <button class="navbar-login-btn" onClick={() => setShowModal(true)}>
                Login
              </button>
            )}
          </nav>
        </body>

        {/* Nav Bar Section */}
        <nav class="categorybar">
          <div class="categorybar-middle">
            <a class="categorybar-btn" href="/Shirts">
              Shirts
            </a>
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

      {/* //Log In Section */}
      <Modal size="lg" show={showModal} onHide={() => setShowModal(false)} aria-labelledby="signup-modal">
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey="login">
          <Modal.Header closeButton>
            <Modal.Title id="signup-modal">
              <Nav variant="tabs">
                <Nav.Item>
                  <Nav.Link eventKey="login">Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="signup">Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey="login">
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey="signup">
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
};

export default Header;
