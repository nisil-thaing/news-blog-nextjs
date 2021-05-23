import styled from 'styled-components';

import { pixelsToRem } from 'styles/mixins.style';
import { FONT_WEIGHTS } from 'constants/app-styles.constant';

export const Container = styled.div`
  p {
    font-size: ${ pixelsToRem(12) };
    line-height: 135%;
    white-space: nowrap;
  }

  .avatar-wrapper {
    flex-basis: ${ pixelsToRem(24) };
    min-width: ${ pixelsToRem(24) };
  }

  .display-name {
    font-weight: ${ FONT_WEIGHTS.BOLD };
  }
`;
