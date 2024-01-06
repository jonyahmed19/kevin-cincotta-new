import styled, { createGlobalStyle } from "styled-components";

export const AppContainer = styled.div`
  height: 100%;
  width: 100%;
  background: #ffffff;
`;

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    > #root {
      height: 100%;
    }
  }
  .react-photo-gallery--gallery {
    padding-top: 8px;
    padding-left: 8px;
  }
`;
