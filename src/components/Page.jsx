import React, { useEffect } from "react";
import Header from "./Header.jsx";

export const Page = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (<>
    <Header {...props} />
    <div className={props.nopad ? "" : "page"}>
      {props.children}
    </div>
    <div className="page-footer">
      &copy;&nbsp;2023&nbsp;Kevin Cincotta,&nbsp;LLC &nbsp; 
      {/* Contact:&nbsp;<a href="mailto:kevin@1ndr.com">kevin@1ndr.com</a> &nbsp; | &nbsp;
      Follow&nbsp;me:&nbsp;<a href="https://www.instagram.com/1ndr.works/"><i className="fab fa-instagram"></i>1ndr.works</a> &nbsp; */}
      | &nbsp;<a href="/privacy-policy">Privacy Policy</a> &nbsp;
      | &nbsp;<a href="/terms-of-service">Terms of Service</a> &nbsp;
    </div>
  </>
  );
};

export default Page;
