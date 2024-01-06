import { useNavigate } from "react-router-dom";

// import Page from "./Page.jsx";
import ContactInfo from "./ContactInfo.jsx";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 onClick={() => navigate("/")}>Oops!</h1>
      <p>
        Sorry, something went sideways. I guess there are limits to what a
        computer can do!
      </p>
      <p>Please contact me and I'll hook you up with what you need.</p>
      <ContactInfo />
    </div>
  );
};

export default Error;
