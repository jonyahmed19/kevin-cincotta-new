import React from "react";

const WallImages = () => {
  const image = require("../images/blur_edges.jpg");

  return <div className="flexImages">
    <img key="wallImage" className="blurEdge" src={image} alt=""/>
  </div>
};

export default WallImages;
