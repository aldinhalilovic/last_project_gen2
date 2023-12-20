import React from "react";
import SignInForm from "../containers/Sign/SignInForm";

function SigninPage() {
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
      <SignInForm />
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

export default SigninPage;

// https://buttercms.com/blog/building-reusable-components-using-react/

// <Button color="red" onPress={() => console.log("nesto")} />
