import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

function SignInForm() {
  const navigate = useNavigate();

  return (
    <div className="main-cont">
      <div className="left-side">
        <div className="form">
          <div>
            <h1 id="naslov">Get Started Now</h1>
          </div>
          <label>Name</label>
          <input
            type="text"
            required
            id="inp"
            placeholder="Enter your name"
          ></input>
          <label>Email address</label>
          <input
            type="text"
            required
            id="inp"
            placeholder="Enter your email"
          ></input>
          <label>Password</label>
          <input
            type="password"
            required
            id="inp"
            placeholder="Password"
          ></input>
          <div>
            <input type="checkbox" id="termsCheckbox" />
            <label htmlFor="termsCheckbox" id="pet">
              I agree to the terms&policy
            </label>
          </div>
          <button className="button-1">Signup</button>
          <hr></hr>
          <div className="btns">
            <div className="google">
              <img src="./sadlkjaskldjaklsdjaklsdj" alt=""></img>
              <p>Sign in with Google</p>
            </div>
            <div className="google">
              <img src="https://cdn-icons-png.flaticon.com/512/152/152752.png"></img>
              <p>Sign in with Apple</p>
            </div>
          </div>
        </div>
        <div className="sign-in">
          <p>
            Have an account ?{" "}
            <span id="blue" onClick={() => navigate("/")}>
              Sign in
            </span>
          </p>
        </div>
      </div>
      <div className="right-side">{/* <img />  50% width */}</div>
    </div>
  );
}

export default SignInForm;
