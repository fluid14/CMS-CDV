import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  #map {
    height: 100%;
  }
`;

export default GlobalStyle;
