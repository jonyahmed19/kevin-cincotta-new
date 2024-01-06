import React from "react";
import Series from "../components/Series.jsx";
import { largePrints } from "../ImageGallery/images";

const header = () => <p className="series">
    Beautiful giclée prints on lightly textured paper.
</p>;

function LargePrints(props) {
    return <Series {...props}
        images={largePrints}
        series="Large Art Prints"
        header={header}
    />;
}

export default LargePrints;
