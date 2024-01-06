import React from "react";
import { Link } from "@reach/router";
import Series from "../components/Series.jsx";
import Works from "../data/Works";

function isFave(painting) {
    const key = "1ndr.fave." + painting.nickname
    const isFave = !!JSON.parse(window.localStorage.getItem(key))
    return isFave
}

const Links = () => <ul className="linkList">
    <li><Link to="/shop/paintings">Painting</Link></li>
    <li><Link to="/shop/smallprints">Small Print</Link></li>
    <li><Link to="/shop/largeprints">Large Print</Link></li>
    <li><Link to="/shop/canvasprints">Canvas Print</Link></li>
</ul>

const info = () => <div className="series">
    <p>
        Add more favorites by browsing any of these lists:
    </p>
    <Links />
    <p>
        When viewing any painting, click <i className="fa-thin fa-heart" /> to favorite or unfavorite by clicking <i className="fa-solid fa-heart" />.
    </p>
</div>

function Favorites(props) {
    const myFaves = Works.filter(painting => isFave(painting)).map(
        ({ mosaic, width, height, caption, page }) => ({
            src: mosaic,
            width,
            height,
            alt: caption,
            caption,
            page
        })
    );

    if (myFaves.length === 0) {
        return <Series {...props}
            images={myFaves}
            series="Favorites"
            header={() => <div className="series"><p>
                Whenever you're looking at a painting on this site, you can favorite it by clicking <i className="fa-thin fa-heart" /> or unfavorite by clicking <i className="fa-solid fa-heart" />.  All your favorites will show on this page.
            </p>
                <p>
                    Looks like you don't have any favorites yet.  Browse any of these lists to select some:
                </p>
                <Links />
            </div>} />
    }

    return <Series {...props}
        images={myFaves}
        series="Favorites"
        footer={info}
    />;
}

export default Favorites;
