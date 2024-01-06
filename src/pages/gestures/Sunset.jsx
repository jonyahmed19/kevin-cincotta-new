import React from "react";
import Painting from "../../components/Painting.jsx";

const Sunset = (props) => {
  return <Painting {...props} nickname="Sunset">
    <p>Sunsets are always pretty but sometimes a little sad because your day is ending.
      Especially for me on this trip, because once the sun set, I was done painting for the day.</p>
  </Painting>;
};

export default Sunset;
