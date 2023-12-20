import React from "react";
import LoginForm from "../containers/Login/LoginForm";

function LoginPage() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "none",
        overflowY: "hidden",
      }}
    >
      <LoginForm />
      <div style={{ width: "50vw", height: "100vh" }}>
        <img
          style={{ width: "50vw", height: "100vh" }}
          alt="slika"
          src="slika.png"
        />
      </div>
    </div>
  );
}

export default LoginPage;
