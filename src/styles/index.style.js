import { createGlobalStyle } from 'styled-components';

import { COLORS, FONT_BASE } from 'constants/app-styles.constant';

const GlobalStyles = createGlobalStyle`
  /* Reboot - START */
  html {
    font-size: ${ FONT_BASE }px;
    
    * {
      font-family: 'Nunito', sans-serif;
      letter-spacing: 0.05em;
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
`;

export default GlobalStyles;