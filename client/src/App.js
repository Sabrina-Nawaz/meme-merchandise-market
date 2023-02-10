<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Shipping from './pages/shipping';

=======
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchBooks from "./pages/SearchBooks";
import Home from "./pages/Home";
import SavedBooks from "./pages/SavedBooks";
import Header from "./components/Header";
>>>>>>> f567e2fce207821fd4a1a24221b2f591913ac209

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
<<<<<<< HEAD
          <Route 
            path='/' 
            element={<SearchBooks />} 
          />
          <Route 
            path='/shipping' 
            element={<Shipping />} 
          />

          <Route 
            path='*'
            element={<h1 className='display-2'>Wrong page!</h1>}
          />
          
=======
          <Route path="/" element={<SearchBooks />} />
          <Route path="/saved" element={<SavedBooks />} />
          <Route path="*" element={<h1 className="display-2">Wrong page!</h1>} />
>>>>>>> f567e2fce207821fd4a1a24221b2f591913ac209
        </Routes>
        <Footer />
      </>
    </Router>
    
  );
}

export default App;
