import React from "react";
import Page from "../components/Page.jsx";
import ContactInfo from "../components/ContactInfo.jsx";
import H1 from "../components/H1.jsx";

const mural1 = require("../images/murals/Mural-Dateline.jpg")
const mural2 = require("../images/murals/Mural-ILA.jpg")

const Murals = (props) => (
  <Page {...props}>
    <div>
      <H1>Murals</H1>
      <div>
            <p>A couple recent examples of outdoor and indoor murals</p>
            <img className="mural" src={mural1} alt="" />
            <img className="mural" src={mural2} alt="" />
      </div>
    </div>
    <p className="contact">Please reach out if you'd like me to create something for you.</p>
    <footer className="main">
      <ContactInfo />
    </footer>
  </Page>
);

export default Murals;
