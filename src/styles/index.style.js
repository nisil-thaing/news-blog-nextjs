import { createGlobalStyle } from 'styled-components';

import { COLORS, FONT_BASE, FONT_WEIGHTS } from 'constants/app-styles.constant';

const GlobalStyles = createGlobalStyle`
  /* Reboot - START */
  html {
    font-size: ${ FONT_BASE }px;
    
    * {
      font-family: 'Nunito', sans-serif;
      letter-spacing: 0.02em;
    }
  }

  body {
    color: ${ COLORS.BLACK };
    background-color: ${ COLORS.WHITE };
  }
  /* Reboot - END */

  * {
    box-sizing: border-box;
  }

  /* Typography - START */
  h1, h2, h3, h4, h5, h6 {
    font-weight: ${ FONT_WEIGHTS.BLACK };
  }
  /* Typography - END */
`;

export default GlobalStyles;