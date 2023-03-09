import React from "react";
import Navbar from "./Companent/Navbar";
import Body from "./Companent/Body";
import Product from "./Companent/Product";
import {Router, Routes, Route, useLocation} from "react-router-dom";

function App() {
    const location = useLocation()
  return (
    <div className="batman-store">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Body />} />
        <Route path={location?.pathname} element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
