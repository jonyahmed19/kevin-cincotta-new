// import React from "react";
// import Page from "../components/Page.jsx
import "../styles.css";
import ContactInfo from "../components/ContactInfo.jsx";
import H1 from "../components/H1.jsx";
const Contact = () => (
  <div>
    <div>
      <H1>Contact Me</H1>
      <p className="contact">
        If you are interested in showing or purchasing my work, please reach out
        to me and I'd be happy to provide additional details. My contact
        information is below.
      </p>
    </div>
    <footer className="main">
      <ContactInfo />
    </footer>
  </div>
);

export default Contact;
