// import React from "react";
//import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { AppContainer, GlobalStyles } from "../styles";
import Gallery from "react-photo-album";
import GridImage from "../ImageGallery/components/ImageMosaic/components/GridImage.jsx";

const GalleryContainer = styled.div`
  overflow-y: auto;
  height: 100%!important;
  max-height: calc(100% - 4em);
  padding: 0;
`;

const ImageMosaic = (props) => {
  return (
    <div>
      <GalleryContainer>
        <h1
          className={props.isNamedSeries ? "series" : ""}
          onClick={() => navigate(-1)}
        >
          {props.series}
        </h1>
        {props.header ? props.header() : ""}
        <Gallery
          layout="masonry"
          columns={(containerWidth) => {
            let columns = 1;
            if (containerWidth >= 500) columns = 2;
            if (containerWidth >= 900) columns = 3;
            if (containerWidth >= 1200)
              columns = Math.floor(containerWidth / 400);
            return columns;
          }}
          onClick={props.handleClick}
          photos={props.images}
          spacing={64}
          renderPhoto={GridImage}
        />
      </GalleryContainer>
      {props.footer ? props.footer() : ""}
    </div>
  );
};

function Series(props) {
  // useEffect(() => {
  //     window.scrollTo(0, 0);
  // }, []);
  const navigate = useNavigate();

  return (
    <ThemeProvider
      theme={{
        pageBackgroundColor: "#f0f0f0",
        pageContentFontColor: "#0f0f0f0",
        pageContentLinkHoverColor: "#036f71",
        pageContentSelectionColor: "#ff0000",
        headerNavFontColor: "#036f71",
        accentColor: "#f0f0f000",
      }}
    >
      <AppContainer>
        <GlobalStyles />
        <ImageMosaic
          {...props}
          images={props.images}
          handleClick={(event, photo, index) => {
            navigate(props?.images[event.index]?.page);
          }}
          series={props?.series}
        />
      </AppContainer>
    </ThemeProvider>
  );
}
export default Series;
