import React from "react";
import Series from "../components/Series.jsx";
import { availablePaintings } from "../ImageGallery/images";

const header = () => <p className="series">
    Acrylic on wood panel original paintings with custom painted frames that extend the image around the frame.
</p>;

function Paintings(props) {
    return <Series {...props}
        images={availablePaintings}
        series="Paintings"
        header={header}
    />;
}

export default Paintings;
