import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Buy from "./Buy.jsx";

function formatFraction(value) {
  const inches = Math.trunc(value);
  //  const sixteenths = ((value - inches) * 16).toFixed() / 16;
  const sixteenths = ((value - inches) * 8).toFixed() / 8;
  const fraction = (function (eigths) {
    switch (eigths) {
      case 0:
        return "";
      case 1 / 16:
        return "1/16";
      case 1 / 8:
        return "1/8";
      case 3 / 16:
        return "3/16";
      case 1 / 4:
        return "1/4";
      case 5 / 16:
        return "5/16";
      case 3 / 8:
        return "3/8";
      case 7 / 16:
        return "7/16";
      case 1 / 2:
        return "1/2";
      case 9 / 16:
        return "9/16";
      case 5 / 8:
        return "5/8";
      case 11 / 16:
        return "11/16";
      case 3 / 4:
        return "3/4";
      case 13 / 16:
        return "13/16";
      case 7 / 8:
        return "7/8";
      case 15 / 16:
        return "15/16";
      default:
        return "";
    }
  })(sixteenths);

  var text = inches ? inches : "";
  if (sixteenths) text += ` ${fraction}`;
  //text += '"';
  return text;
}

function calcPrice(area) {
  // Cost is $60 for 8x12 plus $0.30 per square inch of additional area
  // based on reverse engineering the pricing of PosterBurner, this yields
  // a markup of 74-89%
  const basePrice = 60;
  const minArea = 8 * 12;
  const perInch = 0.30;
  const price = Math.round(basePrice + (area - minArea) * perInch);
  return price;
}

const SizeSlider = ({ nickname, size, desiredWidth, label }) => {
  const dims = String(size).split("x");
  const originalWidth = Number(dims[0]);
  const originalHeight = Number(dims[1]);
  const [width, setWidth] = useState(desiredWidth ? desiredWidth : originalWidth);
  const aspect = originalWidth / originalHeight;
  const height = width / aspect;

    const isPortrait = originalWidth < originalHeight;
  //const isSquare = originalWidth === originalHeight;
  const minWidth = isPortrait ? 8 : 12;
  const maxWidth = isPortrait ? 24 : 36;
  const dimensions = `${width}" x ${formatFraction(height)}"`;
  const area = width * height;
  const price = `$${calcPrice(area)}`;
  return (
    <div className="slider prices">
      <div>
        <Slider
          min={minWidth}
          max={maxWidth}
          value={width}
          tooltip={false}
          onChange={setWidth}
          railStyle={{
            height: 12
          }}
          handleStyle={{
            height: 20,
            width: 20,
            marginLeft: -10,
            marginTop: -5,
            backgroundColor: "var(--slider)",
            border: 0
          }}
          trackStyle={{
            background: "var(--slider)",
            height: 12
          }}
        />
        <p className="sliderHint">Use the slider to select the perfect size for your space!</p>
      </div>
      <div className="dimensions">{dimensions}</div>
      <div>{price}</div>
      <Buy nickname={nickname} product={width} label={label}/>
    </div>
  );
};

export default SizeSlider;
