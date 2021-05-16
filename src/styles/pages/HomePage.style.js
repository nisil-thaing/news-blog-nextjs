import styled from 'styled-components';

import { COLORS } from 'constants/app-styles.constant';
import { medias } from 'styles/mixins.style';

export const Container = styled.main`
  padding: 5rem 0;

  .featured-content-wrapper {
    background-color: ${ COLORS.GRAY91 };
  }

  ${medias.MEDIUM_SCREEN`
    .featured-content-wrapper {
      background-color: transparent;
      box-shadow: 0 2px 5px 1px rgb(0 0 0 / 5%);
    }
  `}
`;
