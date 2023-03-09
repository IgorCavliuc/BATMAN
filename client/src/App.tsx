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
        <Route  path="/" element={<Body />} />
       {location?.pathname ? <Route path={location?.pathname} element={<Product />} />:null}
      </Routes>
    </div>
  );
}

export default App;
