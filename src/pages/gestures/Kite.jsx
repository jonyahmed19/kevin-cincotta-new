import React from "react";
import Painting from "../../components/Painting.jsx";

const Kite = (props) => {
  const embed = '<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=1620216793/size=small/bgcol=ffffff/linkcol=0687f5/track=4111983612/transparent=true/" seamless><a href="https://thebeachpeople.bandcamp.com/album/cowabunga-live-at-kokomolo-remastered">Cowabunga (Live at Kokomolo) ((Remastered)) by The Beach People</a></iframe>';

  return <Painting {...props} nickname="Kite">
    <p>In homage to <a href="https://thebeachpeople.bandcamp.com/" alt="">The Beach People classic</a>, “Fly my Kite,” this painting dreams of being swept off your feet by a kite and flown over the beaches of Kokomolo.</p>
    <div dangerouslySetInnerHTML={{ __html: embed }}></div>

  </Painting>;
};

export default Kite;
