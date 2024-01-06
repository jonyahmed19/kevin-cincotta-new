import PropTypes from "prop-types";
import styled from "styled-components";
import { makePretty } from "../../../../data/WorkFunctions.js";

const GridImage = ({
  photo: { caption, price, size },
  imageProps: { src, alt, onClick, style, ...restImageProps }
}) => (
    <>
      <ImageContainer onClick={onClick}>
        <Image
            src={src}
            alt={alt}
            style={{ ...style, marginBottom: 0 }}
            {...restImageProps}
        />
        <Caption>{caption}</Caption>
        {(price || size) && <Info><Price>{price}</Price><Size>{makePretty(size)}</Size></Info>}
      </ImageContainer>
    </>

);

GridImage.propTypes = {
  photo: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    price: PropTypes.string,
    size: PropTypes.string,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired
  }).isRequired,
  imageProps: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    style: PropTypes.shape({})
  })
};

export default GridImage;

const Caption = styled.div`
  font-family: "auto-mission-regular";
  text-align: center;
  font-size: clamp(20px, 2vw, 2rem);
  margin-top: 18px;
  color: var(--text-subheading);
`;

const Info = styled.div`
font-family: var(--font-heading);
  text-align: center;
  font-size: clamp(14px, 1rem, 1.25);
  margin-top: 0px;
  color: var(--text-subtitles);
`;

const Price = styled.span`
  font-weight: bold;
`;

const Size = styled.span`
  font-size: 80%;
  margin-left: 1rem;
`;
const ImageContainer = styled.div`
  cursor: pointer;
  margin-bottom: 25px;
`;

const Image = styled.img`
  display: block;
  transition: outline 0.2s linear;  
  :hover {
    /* swapped border effect with outline since border didn't play nice with the image shadow */
    outline: ${({ theme }) => `2px solid ${theme.pageContentLinkHoverColor}`};
    outline-offset: -2px;
  
`;
