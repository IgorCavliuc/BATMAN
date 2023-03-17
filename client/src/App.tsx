import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { getAllUser } from "./Redux/User/userSlice";
import { getUser } from "./server";
import Body from "./Companent/Body";
import Navbar from "./Companent/Navbar";
import Product from "./Companent/Product";
import Profile from "./Companent/Profile";
import SignIn from "./Companent/SignIn";
import SignUp from "./Companent/SignUp";
import "./clear.css";
import "./index.css";

function App({ user, getAllUser }: any) {
    const [login, setLogin] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location?.pathname === "/signin" || location?.pathname === "/signup") {
            setLogin(true);
        }
    }, [location?.pathname]);

    useEffect(() => {
        const dataString = sessionStorage.getItem("users") ?? '';
        const data = JSON.parse(dataString || "[]")[0];
console.log('data', data)
        if (data) {
            if (new Date().getTime() < data.expires) {
                console.log( data.users);
            } else {
                console.log( "users", data.users);

                sessionStorage.removeItem("users");
            }
        }
    }, []);

    useEffect(() => {
        const dataString = sessionStorage.getItem("users");
        if (dataString) {
            const user = JSON.parse(dataString)[0];
            // console.log(user);
            getUser(user?.login, user?.password).then((res) => getAllUser(res));
        } else {
            // window.location.pathname = '/profile'
        }
    }, [getAllUser]);

    return (
        <div className="batman-store">
            {!login && <Navbar />}
            <Routes>
                <Route path="/" element={<Body />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/profile" element={<Profile />} />
                {location?.pathname && (
                    <Route path={location?.pathname} element={<Product />} />
                )}
            </Routes>
        </div>
    );
}

const mapStateToProps = (state: any) => ({
    user: state?.userSlice,
});

export default connect(mapStateToProps, { getAllUser })(App);
