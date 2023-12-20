import React from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
function LoginForm() {
  const navigate = useNavigate();
  return (
    <div className="loginContainer">
      <div className="centerLogin">
        <div className="title">
          <h1>Welcome Back!</h1>
          <p>Enter your Credentials to acces your account</p>
        </div>

        <div className="mid">
          <div className="inp">
            <label className="l">Email address</label>
            <input placeholder="Enter your email"></input>
          </div>
          <div className="name">
            <div className="div1">
              <label>Password</label>
              <label>Forgot password</label>
            </div>
            <div className="div2">
              <input type="password" placeholder="password"></input>
            </div>
          </div>
          <div className="row">
            <input className="check" type="checkbox"></input>
            <label>Remember for 30 days</label>
          </div>
          <button className="btn">Login</button>
          <div className="lines">
            <div className="line"></div>
            <h6>Or</h6>
            <div className="line"></div>
          </div>
        </div>
        <div className="GA">
          <div className="google apple">
            <img src="google.jpg"></img>
            Sign in with Google
          </div>
          <div className="apple">
            <img className="appleImg" src="apple.png"></img>
            Sign in with Apple
          </div>
        </div>
        <div className="noACC">
          <h4>
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/signin")}
              style={{ color: "blue", cursor: "pointer" }}
            >
              Sign Up
            </span>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
