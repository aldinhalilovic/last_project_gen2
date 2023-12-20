import React from "react";
import ContactForm from "../containers/Contact/ContactForm";

function ContactusPage() {
  return (
    <div className="main-cont">
      <div className="nav-cont">
        <h1>Home</h1>
        <h1>Logo</h1>
        <h1>Contact</h1>
      </div>
      <div className="content-cont">
        <div className="content"></div>
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactusPage;
