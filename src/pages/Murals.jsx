import ContactInfo from "../components/ContactInfo.jsx";
import H1 from "../components/H1.jsx";
import mural1 from "../images/murals/Mural-Dateline.jpg";
import mural2 from "../images/murals/Mural-ILA.jpg";

const Murals = () => (
  <div>
    <div>
      <H1>Murals</H1>
      <div>
        <p>A couple recent examples of outdoor and indoor murals</p>
        <img className="mural" src={mural1} alt="" />
        <img className="mural" src={mural2} alt="" />
      </div>
    </div>
    <p className="contact">
      Please reach out if you'd like me to create something for you.
    </p>
    <footer className="main">
      <ContactInfo />
    </footer>
  </div>
);

export default Murals;
