import React from "react";

const ExampleImages = () => {
    const flexImages = [
        {
            src: require("../images/social/ILA.jpg")
        },
        {
            src: require("../images/social/RiNo.jpg")
        },
        {
            src: require("../images/social/P+B.jpg")
        },
        {
            src: require("../images/social/Dairy-Block.jpg")
        },
        {
            src: require("../images/social/P+B_Denver.jpg")
        },
        {
            src: require("../images/social/West+Main.jpg")
        }
    ];
    return (
        <div className="flexImages past-events">
            {flexImages.map((image, index) => <img key={index} src={image.src} alt="" title="" />)}
        </div>
    );
};

export default ExampleImages;
