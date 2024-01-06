import React from "react";
import { Link, navigate } from "@reach/router";
import Page from "../components/Page.jsx";
import "../styles.css";
import ContactInfo from "../components/ContactInfo.jsx";
import H1 from "../components/H1.jsx";
// import Buy from "../components/Buy";
// import Works from "../data/Works";

// const Info = ({ nickname }) => {
//   const painting = Works.find((element) => element.nickname === nickname);
//   return !!painting ? (
//     <>
//       <Link to={painting.page}>{painting.caption}</Link>
//       <div className="dimensions">{painting.size}</div>
//       <div>{painting.sold ? <span className="sold">SOLD</span> : painting.price}</div>
//       {painting.sold ? (
//         <div></div>
//       ) : (
//         <Buy title={painting.caption} product="Original" size={painting.size} price={painting.price} />
//       )}
//     </>
//   ) : (
//     ""
//   );
// };

const Shop = (props) => (
  <Page {...props}>
    <div className="shop">
      <H1>Shop</H1>
      <p>
        Works are available as original paintings and also as giclée prints or canvas-wrap prints in multiple
        sizes. Prints start at $30 and paintings start at $250.
      </p>

      {/* <h2>Original Works</h2> */}
      <h3 onClick={() => navigate("/shop/paintings")}>Shop paintings</h3>
      {/* <Link to="/inventory">List available inventory</Link> */}

      {/* <h2>Giclée Prints</h2> */}
      <h3 onClick={() => navigate("/shop/smallprints")}>Shop small prints</h3>
      <h3 onClick={() => navigate("/shop/largeprints")}>Shop large prints</h3>

      {/* <h2>Canvas-Wrap Prints</h2> */}
      <h3 onClick={() => navigate("/shop/canvasprints")}>Shop canvas prints</h3>

      {/* <p>
        Each painting is available in small and large sizes{" "}
        <a
          href="https://artradarjournal.com/2021/11/17/what-is-the-difference-between-art-print-and-giclee-print/"
          alt=""
        >
          giclée
        </a>
        printed on the best paper money can buy (300gsm lightly textured paper).
      </p>
      <div className="prices nobuy">
        <div>Small&nbsp;Rectangular Giclée&nbsp;Prints</div>
        <div className="dimensions">8x12, 12x8,<br/> 9x12, 12x9</div>
        <div>$30</div>
        <div>Small&nbsp;Square Giclée&nbsp;Prints</div>
        <div className="dimensions">12x12</div>
        <div>$35</div>
        <div>Large&nbsp;Square Giclée&nbsp;Prints</div>
        <div className="dimensions"> 18x18</div>
        <div>$50</div>
        <div>Large&nbsp;Rectangular Giclée&nbsp;Prints</div>
        <div className="dimensions">16x24, 24x16,<br/>18x24, 24x18</div>
        <div>$75</div>
      </div> */}

      {/* <p>
        All works in this series are also available as canvas-wrap prints with 1.5" thick frames that replicate the unique frame style
        of the originals. Any painting may produced at whatever size you wish. Some popular sizes are shown below.
      </p>
      <div className="prices nobuy">
        <div>Small&nbsp;Rectangular Canvas&nbsp;Prints</div>
        <div className="dimensions">8x12, 12x8</div>
        <div>$60</div>
        <div>Small&nbsp;Square Canvas&nbsp;Prints</div>
        <div className="dimensions">12x12</div>
        <div>$75</div>
        <div>Large&nbsp;Square Canvas&nbsp;Prints</div>
        <div className="dimensions"> 18x18</div>
        <div>$128</div>
        <div>Large&nbsp;Rectangular Canvas&nbsp;Prints</div>
        <div className="dimensions">18x24, 24x18</div>
        <div>$161</div>
      </div> */}
      <footer>
      <h2 style={{textAlign: "center"}}>Something else?</h2>
      <p>
        I am available for <Link to="/commissions">commissioned works</Link> and other creative projects.
      </p>
      </footer>
      <ContactInfo />
    </div>
  </Page>
);

export default Shop;
