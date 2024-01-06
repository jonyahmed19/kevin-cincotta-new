import React from "react";
import Series from "../components/Series.jsx";
import { apresSkiImages } from "../ImageGallery/images";

const header = () => <p className="series">
    Après-Ski is a winter series capturing the fun of being in nature skiing.
</p>;

function ApresSkiSeries(props) {
    return <Series isNamedSeries={true} {...props}
        images={apresSkiImages}
        series="Apres Ski"
        header={header}
    />;
}

export default ApresSkiSeries;
