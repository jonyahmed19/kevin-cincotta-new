import React from "react";
import Series from "../components/Series.jsx";
import { analogFutureImages } from "../ImageGallery/images";

const header = () => <p className="series">
    Analog Future is the story of people pursuing their goals through the metaphor of a treasure hunt. The simple geometries and playful colors evoke the innocent optimism the protagonists carry through their journey.
</p>;

function AnalogFutureSeries(props) {
    return <Series isNamedSeries={true} {...props}
        images={analogFutureImages}
        series="Analog Future"
        header={header}
    />;
}

export default AnalogFutureSeries;
