import Page from "../components/Page.jsx";
// import WallImages from "../components/WallImages";
import ContactInfo from "../components/ContactInfo.jsx";
import {Link, useNavigate} from "react-router-dom";

// const analogFuture = require("../images/social/AnalogFuture.jpg");
// const gestures = require("../images/social/GesturesOfLove.jpg");
// const analogFuture = require("../images/AnalogFuture.jpg");
// const gestures = require("../images/kevin.jpg");
// const apresSki = require("../images/apresski/Bears.jpg");
// const mural = require("../images/examples/mural.jpeg");

import analogFuture from "../images/AnalogFuture.jpg"
import gestures from "../images/kevin.jpg"
import apresSki from "../images/apresski/Bears.jpg"
import mural from "../images/examples/mural.jpeg"

const Home = () => {

  const navigate = useNavigate();

  return (

      /*<Page nopad={true}>

      </Page>*/
      <>
        <div className="home">
          <div className="section hero">
            <img src={mural} alt="" />
            <div className="vcenter"><h1>1NDR</h1>
              <h2>Works by Kevin Cincotta</h2>
              <p className="bio">Painter and muralist based out of Colorado<br />available for
                <Link to="/murals">murals</Link> and other <Link to="/commissions">commissions</Link><br />
                Follow me at <a href="https://www.instagram.com/1ndr.works">@1ndr.works</a></p>
            </div>
          </div>
          <div className="section gesturesOfLove">
            <p><span className="larger gestures"><Link to="/gestures">Gestures of Love</Link></span><br /> inspired by a nomadic road trip along the pacific coast</p>
            <img src={gestures} onClick={() => (navigate("/gestures"))} alt="Gestures of Love"
                 title="Gestures of Love depicts relationships between people
    and the environment with feelings of gratitude" />
          </div>


          <div className="section apresSki">
            <p><span className="larger gestures"><Link to="/apres-ski">Apres Ski</Link></span>
              <br /> the fun and magic of snowy mountains</p>
            <img src={apresSki} onClick={() => (navigate("/apres-ski"))} alt="Apres Ski"
                 title="Apres Ski is about the fun, beauty, and magic of snowy mountains" />
          </div>
          <div className="section analogFuture">
            <p><span className="larger gestures"><Link to="/analog-future">Analog Future</Link></span>
              <br /> the story of a dangerous treasure hunt</p>
            <img src={analogFuture} onClick={() => (navigate("/analog-future"))} alt="Analog Future"
                 title="Analog Future is the story of people pursuing their goals
    through the metaphor of a treasure hunt" />
          </div>

          {/* <div className="page">
      <p>My<Link to="/shop/paintings">paintings</Link> are acrylic on wood panel with custom painted frames in a style I call <i>family-friendly&nbsp;cubist&nbsp;psychedelia</i>.</p>
      <p>
        High-quality art prints of each painting are available in
        <Link to="/shop/smallprints">small</Link>and<Link to="/shop/largeprints">large</Link> sizes.
      </p>
      <p>
        <Link to="/shop/canvasprints">Canvas-wrap prints</Link> that mimic the unique frames of the originals are another great option.
      </p>

      <WallImages />
      <p>
        I am also available for <Link to="/commissions">commissioned&nbsp;paintings&nbsp;and&nbsp;murals.</Link>
      </p>
    </div> */}
          {/* <div className="section wearableArt">
        <p><span className="gestures">1NDR Wear!</span><br />a collection of new designs in wearable form (hats,&nbsp;hoodies,&nbsp;etc).</p>
        <h1 style={{margin: "auto"}}>COMING SOON!!!<br />Stay tuned...</h1>
      </div> */}

        </div>
        <footer className="main">
          <p>
            If you have any questions about me and my work, please reach
            out in whatever way is most convenient for you.
          </p>
          <ContactInfo />
        </footer>


      </>

  );
}

export default Home;
