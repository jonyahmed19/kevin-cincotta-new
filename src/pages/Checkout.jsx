import React, { useState } from "react";
import { Link } from "@reach/router";
import Page from "../components/Page.jsx";
import CheckoutForm from "../components/CheckoutForm.jsx";
import Error from "../components/Error.jsx";
import {
  Find,
  FindNext,
  FindPrev,
  GetInfo,
  GetPage,
  CanvasPrint,
} from "../data/WorkFunctions.js";
import StyledSlider from "../components/StyledSlider.jsx";
import H1 from "../components/H1.jsx";
import Heart from "../components/Heart.jsx";

function clean(price) {
  return Number(price.replace("$", "").replace(",", ""));
}

function Checkout(props) {
  const painting = Find(props.nickname);
  const [width, setWidth] = useState(0);
  const isCanvas = !!Number(props.format);
  const canvas = isCanvas
    ? CanvasPrint(painting, width ? width : props.format)
    : null;
  if (canvas && canvas.width !== width) {
    setWidth(canvas.width);
  }
  if (!painting) return <Error />;
  const { caption, price } = GetInfo(painting, props.format);
  if (!caption || !price) return <Error />;

  // We need this to return properly from canceling out of Stripe
  const cancelUrl =
    window.location.origin +
    "/checkout/" +
    props.nickname +
    "/" +
    (canvas ? canvas.width : props.format);
  window.history.replaceState(
    null,
    canvas ? canvas.caption : caption,
    cancelUrl
  );

  const getCaption = (work) =>
    work.caption.toLocaleLowerCase().replace(/[ ]/g, "-");
  const prevWork =
    "/checkout/" + getCaption(FindPrev(props.nickname)) + "/" + props.format;
  const nextWork =
    "/checkout/" + getCaption(FindNext(props.nickname)) + "/" + props.format;

  const Purchase = () =>
    price === "SOLD" ? (
      <div></div>
    ) : (
      <CheckoutForm
        title={painting.caption}
        painting={painting}
        product={canvas ? canvas.caption : caption}
        price={clean(canvas ? canvas.price : price)}
        format={props.format}
        cancelUrl={cancelUrl}
      />
    );

  return (
    <Page {...props}>
      <div className="checkout">
        <div className="browse">
          <Link to={prevWork}>
            <i className="button fa-solid fa-arrow-left-long" />
          </Link>
          <Heart key={painting.nickname} nickname={painting.nickname} />
          <Link to={nextWork}>
            <i className="button fa-solid fa-arrow-right-long" />
          </Link>
        </div>
        <H1>Checkout</H1>
        <div className="preview">
          <img src={painting.mosaic} alt="" />
          <div className="info">
            <h1 className="painting">{painting.caption}</h1>
            <h2>{canvas ? canvas.caption : caption}</h2>
            {canvas && (
              <StyledSlider
                value={width}
                setValue={setWidth}
                minValue={canvas.minWidth}
                maxValue={canvas.maxWidth}
              />
            )}
            <div className="seeAlso">
              Also available in<Link to={GetPage(painting)}>other formats</Link>
            </div>
            <div className="beside">
              <Purchase />
            </div>
          </div>
          <div className="price">{canvas ? canvas.price : price}</div>
        </div>
        <div className="below">
          <Purchase />
        </div>
        <hr />
        <footer>
          <p style={{ textAlign: "center" }}>
            If you have any questions or doubts, feel&nbsp;free&nbsp;to{" "}
            <Link to="/contact">contact&nbsp;me</Link>.
          </p>
        </footer>
      </div>
    </Page>
  );
}
export default Checkout;
