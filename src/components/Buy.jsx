import React from "react";
import { Link } from "@reach/router";
import { Find } from "../data/WorkFunctions.js";

const Buy = (props) => {
  const { nickname, product, label } = props;
  const work = Find(nickname)
  const caption = work.caption.toLocaleLowerCase().replace(/[ ]/g, "-")
  return (
    <span>
      <Link to={`/checkout/${caption}/${product}`} className="buy">
        {label ? label : "BUY"}&nbsp;
      </Link>
    </span>
  );
};

export default Buy;
