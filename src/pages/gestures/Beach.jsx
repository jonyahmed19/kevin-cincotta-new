import React from "react";
import Painting from "../../components/Painting.jsx";

const Beach = (props) => {
  return (
    <Painting {...props} nickname="Beach">
      Nothing like hanging out on a beautiful beach learning to surf, amirite?
    </Painting>
  );
};

export default Beach;
