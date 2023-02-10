import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Shipping from './pages/shipping';


function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
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
          
        </Routes>
        <Footer />
      </>
    </Router>
    
  );
}

export default App;
