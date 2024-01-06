import React from "react";
import ILAImage from "../images/social/ILA.jpg";
import RiNoImage from "../images/social/RiNo.jpg";
import PPlusBImage from "../images/social/P+B.jpg";
import DairyBlockImage from "../images/social/Dairy-Block.jpg";
import PPlusBDenverImage from "../images/social/P+B_Denver.jpg";
import WestMainImage from "../images/social/West+Main.jpg";

const ExampleImages = () => {
  const flexImages = [
    { src: ILAImage },
    { src: RiNoImage },
    { src: PPlusBImage },
    { src: DairyBlockImage },
    { src: PPlusBDenverImage },
    { src: WestMainImage },
  ];

  return (
    <div className="flexImages past-events">
      {flexImages.map((image, index) => (
        <img key={index} src={image.src} alt="" title="" />
      ))}
    </div>
  );
};

export default ExampleImages;
