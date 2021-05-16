import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing:border-box;
  margin:0;
  padding:0;
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, 
}
`;

export const Container = styled.div`
  z-index: 1;
`;

export default GlobalStyle;
