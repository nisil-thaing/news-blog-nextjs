import styled from 'styled-components';

import { COLORS } from 'constants/app-styles.constant';
import { medias, pixelsToRem } from 'styles/mixins.style';

export const Container = styled.main`
  padding: ${ pixelsToRem(100) } 0;

  .featured-content-wrapper {
    width: 100vw;
    margin-left: calc(50% - 50vw);
    background-color: ${ COLORS.GRAY91 };
  }

  ${medias.MEDIUM_SCREEN`
    padding-top: ${ pixelsToRem(120) };

    .featured-content-wrapper {
      width: 100%;
      margin-left: 0;
      background-color: transparent;
      box-shadow: 0 2px 5px 1px rgb(0 0 0 / 5%);
    }
  `}
`;
