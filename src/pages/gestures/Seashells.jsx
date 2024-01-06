import React from "react";
import Painting from "../../components/Painting.jsx";

const Seashells = (props) => {
  return (
    <Painting {...props} nickname="Seashells">
      <p>
        How could I make a series about the beach without including seashells? These are all shells native to
        California. I&apos;ve always been into the hunt to find an environment&apos;s most precious artifacts. Whether
        it be Sunstones in central Oregon or Shark Teeth on the Maryland Coast, each place leaves behind a story through
        the history of its geology.
      </p>
    </Painting>
  );
};

export default Seashells;
