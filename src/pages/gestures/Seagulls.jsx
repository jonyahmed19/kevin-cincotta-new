import React from "react";
import Painting from "../../components/Painting.jsx";

const Seagulls = (props) => {
  return <Painting {...props} nickname="Seagulls">
    <p>I painted this while on the Lost Coast where it&apos;s too rugged for roads so there are only a few campers and lots of seagulls and presumably fish.  I wanted to capture how rugged the coast is.  There weren&apos;t any houses, the only things that could see it all were those seagulls.</p>
  </Painting>;
};

export default Seagulls;
