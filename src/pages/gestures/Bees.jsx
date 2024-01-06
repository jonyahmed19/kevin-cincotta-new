import React from "react";
import Painting from "../../components/Painting.jsx";

const Bees = (props) => {
  return <Painting {...props} nickname="Bees">
    <p>I noticed different bugs come out at different times of the day. Each morning while I was on the road, I was greeted by a bunch of bees who would fly around pollinating all of the alpine flowers.
    </p>
  </Painting>;
};

export default Bees;
