import React from "react";
import Painting from "../../components/Painting.jsx";

const Painter = (props) => {
  return <Painting {...props} nickname="Painter">
    <p>This piece is autobiographical as it tells the story of how I created this series — I&apos;d park my car (which I was living in at the time) in the most beautiful place it could take me (Oregon obviously, honorable mention California) — and then I&apos;d walk down some nearly deserted trail until I found what I wanted to interpret and preserve in paint. It shows my love for this time of my life, and the creation of this collection.</p>
  </Painting>;
};

export default Painter;
