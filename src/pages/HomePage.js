import React from "react";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="main-cont">
      <div className="nav-cont">
        <h1>Home</h1>
        <h1>Logo</h1>
        <h1>Contact</h1>
      </div>
      <div className="content-cont">
        <div className="content"></div>
      </div>
      <div className="text">
        <h1>Save our forest</h1>
        <p>
          Committed to preserving nature, we safeguard forests as precious
          resources for a sustainable future, providing the care they need.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
