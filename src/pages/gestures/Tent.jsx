import React from "react";
import Painting from "../../components/Painting.jsx";

const Tent = (props) => {
  return <Painting {...props} nickname="Tent">
    <p>My brother and I climbed Mt. Shasta, which — if you don&apos;t want to hike 4,000 ft of elevation in the baking sun — requires you to start the trek at 3 in the morning. Naturally, I woke up grumpy, but it became worth it when we watched a sunrise while standing over all of the clouds that had settled in the valleys beneath us. We climbed through the day, and when we returned we drank the best water I&apos;ve had in my whole life. I could see the snow I was drinking just minutes after it had melted.</p>
  </Painting>;
};

export default Tent;
