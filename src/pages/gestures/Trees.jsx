import React from "react";
import Painting from "../../components/Painting.jsx";

const Trees = (props) => {
  return <Painting {...props} nickname="Trees">
    <p>I painted this after getting lost driving on some old logging roads in
       Northern California by Redwood National and State Parks. </p>
  </Painting>;
};

export default Trees;
