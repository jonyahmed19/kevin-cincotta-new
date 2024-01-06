import React from "react";
import { Link, useNavigate } from "react-router-dom";

import ContactInfo from "../components/ContactInfo.jsx";
import Page from "../components/Page.jsx";
import "../styles.css";
import kevin from "../images/kevin.jpg";

const Thanks = () => {
  const navigate = useNavigate();
  return (
    <div className="thanks">
      <h1 onClick={() => navigate("/")}>Thank You!</h1>
      <img src={kevin} alt="" />
      <p>
        I really appreciate you supporting me and my art! You should receive an
        email receipt for your order within a few minutes and I'll follow-up
        with another email including your tracking number once your order ships.
      </p>
      <p>
        If you have any questions or concerns, feel free to reach out to me.
      </p>
      <p>
        Thanks,
        <br />
        Kevin Cincotta
      </p>
      <br />
      <br />
      <Link className="button" to="/">
        Continue
      </Link>
      <footer className="main">
        <ContactInfo />
      </footer>
    </div>
  );
};

export default Thanks;
