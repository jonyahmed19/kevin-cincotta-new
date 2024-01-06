import React from "react";
import { Link } from "@reach/router";
import PropTypes from "prop-types";
import styled from "styled-components";
import Gallery from "react-photo-album";
import GridImage from "./components/GridImage.jsx";
import ContactInfo from "../../../components/ContactInfo.jsx";
import Header from "../../../components/Header.jsx";
import WallImages from "../../../components/WallImages.jsx";

const ImageMosaic = ({ images, handleClick }) => {
  return (
    <GalleryContainer>
      <Header />
      <p className="notice">
        Come join me at any of my <Link to="/events">upcoming events</Link>.
      </p>
      <Gallery
        layout="masonry"
        columns={(containerWidth) => {
          let columns = 1;
          if (containerWidth >= 500) columns = 2;
          if (containerWidth >= 900) columns = 3;
          if (containerWidth >= 1200) columns = Math.floor(containerWidth / 400);
          return columns;
        }}
        onClick={handleClick}
        photos={images}
        spacing={64}
        renderPhoto={GridImage}
      />
      <footer className="main">
        <p>
          Gestures of Love is a series of paintings I began on a road trip down
          the Pacific Coast in the summer of 2021. These paintings are all done
          in a style I call <i>family-friendly cubist psychedelia</i> and are
          framed in a unique way that extends the image around the frame.
        </p>
        <WallImages />
        <p>
          These works are available as original paintings and also as
          conventional or canvas-wrap prints in multiple sizes.{" "}
          <Link to="/shop">
            Prints start at $30 and originals start at $250.
          </Link>
        </p>
        <p>
          If you are interested in showing or purchasing my work, please reach
          out to me and I'd be happy to provide additional details. My contact
          information is below.
        </p>
        <ContactInfo />
      </footer>
    </GalleryContainer>
  );
};

ImageMosaic.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      alt: PropTypes.string.isRequired,
      caption: PropTypes.string.isRequired,
      height: PropTypes.number.isRequired,
      width: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired
    })
  ),
  handleClick: PropTypes.func.isRequired
};

export default ImageMosaic;

const GalleryContainer = styled.div`
  overflow-y: auto;
  height: 100%;
  max-height: calc(100% - 4em);
  padding: 2vw 3vw;
`;
