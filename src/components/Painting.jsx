import React from "react";
import { Link } from "react-router-dom";
import Page from "./Page.jsx";
import Works from "../data/Works";
import { GetInfo, GetSeries } from "../data/WorkFunctions.js";
import SizeSlider from "./SizeSlider.jsx";
import ContactInfo from "./ContactInfo.jsx";
import Buy from "./Buy.jsx";

const Original = ({ painting, nickname, price, size, sold }) => {
  const dims = String(size).split("x");
  const w = Number(dims[0]);
  const h = Number(dims[1]);
  const formattedSize = `${w}" x ${h}"`;
  const Text = ({ painting }) => {
    const series = GetSeries(painting);
    switch (series) {
      case "/apres-ski/":
        return <p>Includes wood frame.</p>;
      case "/analog-future/":
        return (
          <p>
            These canvas-wrap prints with 1.5" thick frames replicate the unique
            frame style of the original paintings.
          </p>
        );
      case "/gestures/":
        return (
          <>
            <p>
              These canvas-wrap prints with 1.5" thick frames replicate the
              unique frame style of the original paintings.
            </p>
          </>
        );
      default:
        return "";
    }
  };

  return (
    <div>
      {sold && (
        <p>
          Sorry, this original was sold, but prints are still available. I also
          could create something similar for you as a{" "}
          <Link to="/commissions">commissioned work</Link>.
        </p>
      )}
      {!sold && (
        <>
          <div className="prices">
            <div>Acrylic on wood panel</div>
            <div className="dimensions">{formattedSize}</div>
            <div>{price}</div>
            <Buy nickname={nickname} product="original" painting={painting} />
          </div>
          <Text painting={painting} />
        </>
      )}
    </div>
  );
};

const Canvas = ({ series }) => {
  switch (series) {
    case "/apres-ski/":
      return <p>Canvas is wrapped across 1.5" thick frames.</p>;
    case "/analog-future/":
      return (
        <p>
          These canvas-wrap prints with 1.5" thick frames replicate the unique
          frame style of the original paintings.
        </p>
      );
    case "/gestures/":
      return (
        <>
          <p>
            These canvas-wrap prints with 1.5" thick frames replicate the unique
            frame style of the original paintings.
          </p>
        </>
      );
    default:
      return "";
  }
};

function Prints({ painting, nickname }) {
  const small = GetInfo(painting, "small");
  const large = GetInfo(painting, "large");
  const xl = painting.xlAvailable ? GetInfo(painting, "xl") : null;
  console.log("PRINTS", xl);
  return (
    <>
      <p>Beautiful giclée art prints on lightly textured paper:</p>
      <div className="prices">
        {xl && (
          <>
            <div>Full-Size Print</div>
            <div className="dimensions">{xl.size}</div>
            <div>{xl.price}</div>
            <Buy nickname={nickname} product="xl" />
          </>
        )}
        <div>Large Print</div>
        <div className="dimensions">{large.size}</div>
        <div>{large.price}</div>
        <Buy nickname={nickname} product="large" />
        <div>Small Print</div>
        <div className="dimensions">{small.size}</div>
        <div>{small.price}</div>
        <Buy nickname={nickname} product="small" />
      </div>
    </>
  );
}

const Painting = (props) => {
  const painting = Works.find((element) => element.nickname === props.nickname);
  return (
    <div>
      <h1 onClick={() => window.history.back()}>{painting.caption}</h1>
      <div className="splittable">
        <div className="painting">
          <div className="description">{props.description}</div>
          <img className="primary" src={painting.lightbox} alt="" />
          {props.children}
        </div>
        <div className="info">
          <h2>Original Painting</h2>
          <Original
            painting={painting}
            title={painting.caption}
            nickname={painting.nickname}
            price={painting.price}
            size={painting.size}
            sold={!!painting.sold}
          />
          <div>
            <h2>Canvas Print</h2>
            <Canvas series={GetSeries(painting)} />
            <SizeSlider
              nickname={painting.nickname}
              size={GetInfo(painting, "large").unformattedSize}
            />
          </div>
          <h2>Giclée Prints</h2>
          <Prints
            painting={painting}
            nickname={painting.nickname}
            size={painting.size}
          />
          <h2>Questions?</h2>
          <p>
            If you have any doubts or questions, feel free to contact me in
            whatever way is most convenient. I want you to be delighted.
          </p>
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default Painting;
