import React from "react";
import Painting from "../../components/Painting.jsx";

const Berries = (props) => {
  return <Painting {...props} nickname="Berries">
    <p>I met a guy outside of Arcada who was really passionate about foraging. We hung out for a little while until we both became hungry, but instead of whipping out the camping stove, he had another idea in mind. He took me on a hike through the forest around where we were camped to find dinner. He taught me how to handle stinging nettles without hurting myself, and showed me which mushrooms were okay to eat. It was a really nice meal knowing everything we ate was produced naturally by the world that surrounded us.</p>
  </Painting>;
};

export default Berries;
