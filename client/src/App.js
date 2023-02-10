import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchBooks from "./pages/SearchBooks";
import Home from "./pages/Home";
import SavedBooks from "./pages/SavedBooks";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<SearchBooks />} />
          <Route path="/saved" element={<SavedBooks />} />
          <Route path="*" element={<h1 className="display-2">Wrong page!</h1>} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
