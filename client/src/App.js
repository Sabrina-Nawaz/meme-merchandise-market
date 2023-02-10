import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBooks from './pages/SearchBooks';
import Footer from './components/Footer';
import Shipping from './pages/shipping';
import Refund from './pages/Refund';
import Privacy from './pages/privacy';
import Home from './pages/Home';
import Shirts from './pages/Shirts';
import Header from './components/Header';


function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route 
            path='/shipping' 
            element={<Shipping />} 
          />
          <Route 
            path='/refund' 
            element={<Refund />} 
          />
          <Route 
            path='/privacy' 
            element={<Privacy />} 
          />
          <Route path="/" element={<Home />} />
          <Route path="/Shirts" element={<Shirts />} />

          <Route 
            path='*'
            element={<h1 className='display-2'>Wrong page!</h1>}
          />
          
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
