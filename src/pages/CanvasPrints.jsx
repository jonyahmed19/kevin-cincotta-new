import React from "react";
import Series from "../components/Series.jsx";
import { canvasPrints } from "../ImageGallery/images";

const header = () => <p className="series">
    High-quality canvas-wrap prints with 1.5" thick frames that replicate the unique frame style of the originals.
    Prices shown reflect the size of each original work, but after selecting any work, you can adjust the width (and price) to fit your needs.
</p>;

function CanvasPrints(props) {
    return <Series {...props}
        images={canvasPrints}
        series="Canvas-Wrap Prints"
        header={header}
    />;
}

export default CanvasPrints;
