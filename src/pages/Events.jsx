import React from "react";
//import { Link } from "@reach/router";
import Page from "../components/Page.jsx";
import EventImages from "../components/EventImages.jsx";
import H1 from "../components/H1.jsx";
import "../styles.css";
// import { Link } from "@reach/router";
// const flyer = require("../images/West+Main.jpg");

// const featuredimage = require("../images/social/ILA-Mural.jpg");
const Events = (props) => (
  <Page {...props}>
    <div>
      <H1>Events</H1>
      <p>No public 1NDR events at the moment, but lots coming soon. Stay tuned!</p>
      {/* <div className="event">
        <div className="event-featured">
          <div>
            <div className="event-list">
              <div className="event-summary">
                <div className="event-date">
                  <span className="larger">September&nbsp;9</span><br/>
                  <span className="smaller">8&nbsp;PM&nbsp;-&nbsp;Midnight</span>
                </div>
                <div className="event-detail">
                  <a href="https://www.eventbrite.com/e/the-denver-pancakes-booze-art-show-tickets-383168385957">
                    Pancakes &amp; Booze<br/>
                  </a><span className="smaller">tix $10-$15</span>
                </div>
                <div className="event-detail">
                  <a href="https://goo.gl/maps/HzxMkbMyuUGJZRcw8">
                  The&nbsp;Hangar&nbsp;at&nbsp;Stanley</a><br/>
                  2501&nbsp;Dallas&nbsp;Street<br/>
                  Aurora,&nbsp;CO&nbsp;80010209
                </div>
              </div>
            </div>
          </div>
          <div className="flexImages">
            <img src={featuredimage} alt="" title="" />
          </div>
        </div>
      </div> */}
    </div>
    <h1>Past Events</h1>
    <EventImages />
  </Page>
);

export default Events;
