import styled from 'styled-components';

import {
  pixelsToRem,
  medias,
  textMultiLinesTruncate
} from 'styles/mixins.style';

export const Container = styled.section`
  .content-wrapper {
    h2 {
      font-size: ${ pixelsToRem(20) };
      min-height: ${ pixelsToRem(48) };
      line-height: 120%;
    }

    h2, .short-description {
      ${ textMultiLinesTruncate(2) };
    }

    .short-description {
      font-size: ${ pixelsToRem(14) };
      line-height: 150%;
      height: ${ pixelsToRem(42) };
    }
  }

  ${medias.MEDIUM_SCREEN`
    .content-wrapper {
      h2 {
        font-size: ${ pixelsToRem(24) };
        min-height: ${ pixelsToRem(64) };
        line-height: 135%;
      }

      .short-description {
        font-size: ${ pixelsToRem(16) };
        height: ${ pixelsToRem(48) };
      }
    }
  `}
`;
