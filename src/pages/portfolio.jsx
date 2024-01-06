import React from "react";
import PortfolioSeries from "../components/PortfolioSeries.jsx";
import { portfolio } from "../ImageGallery/images";

const header = () => <p className="series">
    Some representative samples of my work.
</p>;

function Portfolio(props) {
    return <PortfolioSeries {...props}
        images={portfolio}
        series="Portfolio"
        header={header}
    />;
}

export default Portfolio;