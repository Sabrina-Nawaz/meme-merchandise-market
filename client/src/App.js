import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Import Components
import Header from "./components/Header";
import Footer from "./components/Footer";
//Import Pages
import Home from "./pages/Home";
import Shipping from "./pages/shipping";
import Refund from "./pages/Refund";
import Privacy from "./pages/privacy";
import Shirts from "./pages/Shirts";
import Sweatshirts from "./pages/Sweatshirts";
import Hats from "./pages/Hats";
import Others from "./pages/Others";
import ShoppingCart from "./pages/ShoppingCart";
import Contact from "./pages/contact";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/Shirts" element={<Shirts />} />
          <Route path="/Sweatshirts" element={<Sweatshirts />} />
          <Route path="/Hats" element={<Hats />} />
          <Route path="/Others" element={<Others />} />
          <Route path="/Cart" element={<ShoppingCart />} />
          <Route path="*" element={<h1 className="display-2">Wrong page!</h1>} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
