import React from "react";
import Painting from "../../components/Painting.jsx";

const Bears = (props) => {
    console.log("BEARS")
  return (
    <Painting {...props} nickname="Bears">
    </Painting>
  );
};

export default Bears;
