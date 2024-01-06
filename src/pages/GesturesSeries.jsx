import React from "react";
import { navigate } from "@reach/router";
import Series from "../components/Series.jsx";
import { gesturesImages } from "../ImageGallery/images";

const header = () => <div className="series"><p>
Gestures of Love is a series of 20 paintings that I created during a life-changing summer road trip along the Pacific Coast. I'd recently graduated college with a music degree at the peak of Covid. With planned summer tours cancelled, I packed my art supplies and sleeping bag in the back of my car and spent the summer painting. 
</p><p>
This series explores the relationships between people and the environment, reminding us of the love and beauty that surrounds us every day. I debuted it at a one-man show on April 1, 2022, and the positive response gave me the confidence to pursue art full-time.
</p><p>
 As you explore this series, I hope you'll find inspiration and joy in my paintings. Thank you for joining me on this journey, and I look forward to sharing more of my art with you in the future.
</p></div>;

const handleClick = (event, photo, index) => navigate(gesturesImages[index].page);

function GesturesSeries(props) {
    return <Series isNamedSeries={true} {...props}
        images={gesturesImages}
        series="Gestures of Love"
        header={header}
        handleClick={handleClick}
    />;
}

export default GesturesSeries;
