import React from "react";
import Painting from "../../components/Painting.jsx";

const Surfer = (props) => {
  return <Painting {...props} nickname="Surfer">
    <p>Surfers in Big Sur.</p>
  </Painting>;
};

export default Surfer;
