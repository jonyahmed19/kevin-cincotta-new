import { useState } from "react";
// import Page from "../components/Page.jsx";
import Works from "../data/Works";
import { Link } from "react-router-dom";
import H1 from "../components/H1.jsx";

function Originals(props) {
  const [showAll, setShowAll] = useState(false);
  const as = Works.filter(
    (painting) =>
      painting.page.startsWith("/apres-ski/") && (showAll || !painting.sold)
  );
  const gl = Works.filter(
    (painting) =>
      painting.page.startsWith("/gestures/") && (showAll || !painting.sold)
  );
  const af = Works.filter(
    (painting) =>
      painting.page.startsWith("/analog-future/") && (showAll || !painting.sold)
  );

  const Card = ({ painting }) => (
    <div className="origCard">
      <div className="caption">
        <Link to={"/checkout/" + painting.nickname + "/original"}>
          {painting.caption}
        </Link>
      </div>
      <div className="size">{painting.size}</div>
      <div className="price">{painting.sold ? "SOLD" : painting.price}</div>
    </div>
  );
  return (
    <div>
      <div>
        <H1>Original Paintings</H1>
        <input
          type="checkbox"
          checked={showAll}
          onChange={() => setShowAll(!showAll)}
        />
        Show all
        <h2>Apres Ski</h2>
        {as.map((painting, index) => (
          <Card key={index} painting={painting} />
        ))}
        <h2>Analog Future</h2>
        {af.map((painting, index) => (
          <Card key={index} painting={painting} />
        ))}
        <h2>Gestures of Love</h2>
        {gl.map((painting, index) => (
          <Card key={index} painting={painting} />
        ))}
      </div>
    </div>
  );
}
export default Originals;
