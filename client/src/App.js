import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Header from "./components/Header";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/saved" element={<SavedBooks />} /> */}
          <Route path="*" element={<h1 className="display-2">Wrong page!</h1>} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
