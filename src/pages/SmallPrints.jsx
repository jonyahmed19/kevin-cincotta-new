import React from "react";
import Series from "../components/Series.jsx";
import { smallPrints } from "../ImageGallery/images";

const header = () => <p className="series">
    Beautiful giclée prints on lightly textured paper.
</p>;

function SmallPrints(props) {
    return <Series {...props}
        images={smallPrints}
        series="Small Art Prints"
        header={header}
    />;
}

export default SmallPrints;
