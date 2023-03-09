import React, { useEffect } from "react";
import Navbar from "./Companent/Navbar/index";
import Body from "./Companent/Body";
import Product from "./Companent/Product";
import { Routes, Route, useLocation} from "react-router-dom";
import SignIn from "./Companent/SignIn";
import SignUp from "./Companent/SignUp";



function App({getAllUser}:any) {
    const location = useLocation()
    
   
  return (
    <div className="batman-store">
      <Navbar />
      <Routes>
        <Route  path="/" element={<Body />} />
        <Route  path="/signin" element={<SignIn />} />
        <Route  path="/signup" element={<SignUp />} />
       {location?.pathname ? <Route path={location?.pathname} element={<Product />} />:null}
      </Routes>
    </div>
  );
}


export default App;
