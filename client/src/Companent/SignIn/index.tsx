import React, { useCallback, useState } from "react";
import "./SignIn.scss";
// import SignInImage from "../../assets/images/dg_1-197-1-min.jpg";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import {getAllUser} from '../../Redux/User/userSlice'
import { getUser } from "../../server";
const AsigAdmin = require('../ico/admin_asig.png')


type FormValues = {
  login: string;
  password: string;

};

function SignIn({getAllUser}:any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    mode: "onChange",
  });



  // useEffect(()=>{
  //   getUsers("cavliman").then(res => getAllUser(res))
  // },[getAllUser])

  const onSubmit = useCallback(async (data: FormValues) => {
    try {
      await getUser(data?.login, data?.password).then(res => getAllUser(res));
      // reset();
      const dataUser = {
        login: data?.login,
        password: data?.password,
      };
      if(!sessionStorage.getItem('users')){
        let clientsArr = JSON.parse(sessionStorage.getItem("users") || "[]");
        clientsArr.push(dataUser);
        sessionStorage.setItem("users", JSON.stringify(clientsArr));
      }
      // window.location.href = "/dashboard";
    } catch (error) {
      console.error(error);
    }
  }, [getAllUser, reset]);



  return (
      <div className="batman-ui--sign-in-content content ">
        <form onSubmit={handleSubmit(onSubmit)} className="batman-ui--form">
          <h1>Sign In</h1>
          {/* login */}
          <input
              {...register("login", {
                required: "Login is a required field!",
                pattern: {
                  value:
                      /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
                  message: "Please enter a valid login.",
                },
              })}
              type="login"
              placeholder="Login"
          />{" "}
          {errors?.login && (
              <div style={{ color: "#3a48f5" }}>*{errors.login.message}</div>
          )}
          {/* Password */}
          <input
              {...register("password", {
                required: "Password is a required field!",
                pattern: {
                  value:
                      /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g,
                  message:
                      "Please enter a valid password. It should contain at least one number, one special character, at least one Latin letter in lower case, at least one uppercase Latin letter, and should consist of at least 6 of the above.",
                },
              })}
              type="password"
              placeholder="Password"
          />{" "}
          {errors?.password && (
              <div style={{ color: "#3a48f5" }}>*{errors.password.message}</div>
          )}
          <div className="batman-ui--submit-button">
            {/*<Link to="/" >*/}
              <button type="submit">
                Submitç
              </button>
            {/*</Link>*/}
            <Link to="/signup"> Sign Up</Link>
          </div>
        </form>
        <div className="batman-ui--sign-in-image">
          <img src={AsigAdmin} alt="AsigAdmin" />
        </div>
      </div>
  );
}


const mapStateToProps = (state: any) => ({
  user: state?.userSlice,
});

export default connect(mapStateToProps, {getAllUser})(SignIn);