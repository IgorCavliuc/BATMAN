import React from "react";
import Navbar from "./Companent/Navbar";
import Body from "./Companent/Body";
import Transport from "./Companent/Transport";
import { Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="batman-store">
      <Navbar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/transport" element={<Transport />} />
      </Routes>
    </div>
  );
}

export default App;
