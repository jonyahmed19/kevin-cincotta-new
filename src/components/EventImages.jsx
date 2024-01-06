const ExampleImages = () => {
    const flexImages = [
        {
            src: import("../images/social/ILA.jpg")
        },
        {
            src: import("../images/social/RiNo.jpg")
        },
        {
            src: import("../images/social/P+B.jpg")
        },
        {
            src: import("../images/social/Dairy-Block.jpg")
        },
        {
            src: import("../images/social/P+B_Denver.jpg")
        },
        {
            src: import("../images/social/West+Main.jpg")
        }
    ];
    return (
        <div className="flexImages past-events">
            {flexImages.map((image, index) => <img key={index} src={image.src} alt="" title="" />)}
        </div>
    );
};

export default ExampleImages;
