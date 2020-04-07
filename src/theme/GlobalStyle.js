import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  body{
    padding-top: 56px;
  }
  
  #map {
    height: 100%;
  }
`;

export default GlobalStyle;
