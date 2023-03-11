import React, {useEffect, useState} from "react";
import Navbar from "./Companent/Navbar/index";
import Body from "./Companent/Body";
import Product from "./Companent/Product";
import { Routes, Route, useLocation} from "react-router-dom";
import SignIn from "./Companent/SignIn";
import SignUp from "./Companent/SignUp";
import Profile from "./Companent/Profile";



function App() {
    const [login, setLogin] = useState(false)
    const location = useLocation()
    const loaction = useLocation()

    useEffect(()=>{
if((loaction?.pathname === '/signin' || loaction?.pathname === '/signup') && sessionStorage.getItem("user") !== null ){
    setLogin(true)
}
    },[loaction?.pathname])
    
   
  return (
    <div className="batman-store">
        {!login?<Navbar /> : null}
      <Routes>
        <Route  path="/" element={<Body />} />
        <Route  path="/signin" element={<SignIn />} />
        <Route  path="/signup" element={<SignUp />} />
          <Route path='/profile' element={<Profile/>}/>
       {location?.pathname ? <Route path={location?.pathname} element={<Product />} />:null}
      </Routes>
    </div>
  );
}


export default App;
