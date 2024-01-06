import ContactInfo from "../components/ContactInfo.jsx";
import H1 from "../components/H1.jsx";

import kevin from "../images/kevin.jpg"

const About = () => (
  <>
    <div className="about">
      <H1>About</H1>
      <img src={kevin} alt="" />
      <p>
        I'm a Denver-based painter and musician. Being raised around a lot of music has inspired me to focus on color, movement, and composition in my paintings - with the goal of creating something as catchy as your favorite song. Have you ever gotten a painting stuck in your head?</p>
      <p>
        In my free time aside from art, I&apos;m very active in music as a performer, producer and engineer.
        Playing music has inspired me to focus primarily on shape, color and movement in my art because these concepts
        are so frequently discussed amongst musicians.  Being involved in art and music has introduced me to a lot of incredible people in the creative communities of Colorado.
      </p>
      <h2>Artist Statement</h2>
      <p>
        Studying jazz and classical music deepened my love for clarity and simplicity. My approach to art draws from both maximalist and minimalist schools to be relatable with intriguing but not overbearing details that invite the audience to connect the work with their own experiences.
      </p>
      <p>
        The simple geometric shapes and overlapping perspectives of my <i>family-friendly cubist psychedelia</i> style draw inspiration from cubism, 50s minimalism, and 60s pop art while the bold color palettes and overall composition connect with my attraction to contemporary maximalist surrealist works of Filipe Pantone, Dustin Yellin, and Aaron Glasson.
      </p>
      <p>
        The juxtaposition of nature and modern life figures prominently in my work. I draw from my life experiences to abstract and generalize those perfect moments when complex emotions are distilled into a single scene — like the simplicity of a happy groove that is fresh yet familiar and just makes you want to dance.
      </p>
    </div>
    <ContactInfo />
  </>


);

export default About;
