import { useState, useEffect } from "react";

const ExampleImages = () => {
  const [flexImages, setFlexImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const images = [
        {
          src: (await import("../images/examples/SeaExplorers.jpg")).default,
        },
        {
          src: (await import("../images/examples/BeachPeople.jpg")).default,
        },
        {
          src: (await import("../images/examples/MonkShirt.jpg")).default,
        },
        {
          src: (await import("../images/examples/BurdensOfLeisure.jpg"))
            .default,
        },
        {
          src: (await import("../images/examples/FuzzHeads.jpg")).default,
        },
        {
          src: (await import("../images/examples/OrpheusPoster.jpg")).default,
        },
      ];

      setFlexImages(images);
    };

    loadImages();
  }, []);

  return (
    <div className="flexImages">
      {flexImages.map((image, index) => (
        <img key={index} src={image.src} alt="" title="" />
      ))}
    </div>
  );
};

export default ExampleImages;
