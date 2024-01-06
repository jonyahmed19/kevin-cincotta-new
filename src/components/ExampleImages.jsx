import React from "react";

const ExampleImages = () => {
    const flexImages = [
        {
            src: require("../images/examples/SeaExplorers.jpg")
        },
        {
            src: require("../images/examples/BeachPeople.jpg")
        },
        {
            src: require("../images/examples/MonkShirt.jpg")
        },
        {
            src: require("../images/examples/BurdensOfLeisure.jpg")
        },
        {
            src: require("../images/examples/FuzzHeads.jpg")
        },
        {
            src: require("../images/examples/OrpheusPoster.jpg")
        }
    ];
    return (
        <div className="flexImages">
            {flexImages.map((image, index) => <img key={index} src={image.src} alt="" title="" />)}
        </div>
    );
};

export default ExampleImages;
