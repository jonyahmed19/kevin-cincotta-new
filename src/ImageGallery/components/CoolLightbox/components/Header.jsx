import React from "react";
import { navigate } from "@reach/router";
import PropTypes from "prop-types";
import styled from "styled-components";
import { IoIosClose } from "react-icons/io";
import Color from "color";
import ButtonControl from "./ButtonControl.jsx";

const LightboxHeader = ({ galleryTitle, images, currentIndex, onClose }) => (
  <TopHeaderBar>
    <LeftSideDescriptionContainer>
      <GalleryHeading>{galleryTitle}</GalleryHeading>
      <GallerySubheading>{images[currentIndex].caption} </GallerySubheading>
      <div className="buy" onClick={() => navigate(images[currentIndex].page)}>
        more info...
      </div>
    </LeftSideDescriptionContainer>

    <RightSideContainer>
      <PageIndicator>
        {currentIndex + 1} / {images.length}
      </PageIndicator>
      <CloseButton onClick={onClose} type="button">
        <IoIosClose size={60} />
      </CloseButton>
    </RightSideContainer>
  </TopHeaderBar>
);

LightboxHeader.propTypes = {
  onClose: PropTypes.func.isRequired,
  galleryTitle: PropTypes.string.isRequired,
  currentIndex: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired
    })
  ).isRequired
};

export default LightboxHeader;

const GalleryHeading = styled.h2`
  margin: 0 0 5px 0;
  font-size: clamp(1rem, 2.5vw, 3rem);
  font-weight: normal;
  font-family: var(--font-title);
  color: var(--text-heading);
`;

const GallerySubheading = styled.h4`
  margin: 0;
  color: var(--text-subheading);
  font-size: clamp(1rem, 3vw, 3rem);
  font-weight: normal;
  font-family: var(--font-title);
`;

const PageIndicator = styled.span`
  white-space: nowrap;
  text-align: center;
`;

const RightSideContainer = styled.div`
  display: flex;
  font-family: var(--font-heading);
  font-size: clamp(1rem, 1.5vw, 2rem);
  align-items: center;
`;

const CloseButton = styled(ButtonControl)`
  height: 100%;
  display: flex;
  border-left-style: none;
  border-left-width: 3px;
  border-left-color: ${({ theme }) => theme.headerNavFontColor};
  color: inherit;
`;

const LeftSideDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-left-width: 0px;
  border-left-color: ${({ theme }) => theme.pageContentLinkHoverColor};
  border-left-style: solid;
  padding: 8px 0 8px 10px;
`;

const TopHeaderBar = styled.header`
  z-index: 10;
  cursor: auto;
  display: flex;
  justify-content: space-between;
  padding: 1vw;
  font-family: var(--text-title);
  font-size: 1.25rem;
  color: ${({ theme }) => theme.headerNavFontColor};
  background-color: ${({ theme }) =>
    Color(theme.pageBackgroundColor).alpha(0.5).hsl().string()};
  > * {
    height: inherit;
  }
`;
